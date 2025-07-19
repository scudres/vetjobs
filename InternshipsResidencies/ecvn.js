const axios = require('axios');
const cheerio = require('cheerio');
const geocodeLocation = require('../utils/geocode'); // path may need adjusting

// Helper function for summarizing text
function summarize(text, maxWords = 25) {
  let clean = text.replace(/\s+/g, ' ').trim();
  let summary = clean.split('. ')[0];
  if (!summary || summary.length < 10) {
    summary = clean.split(' ').slice(0, maxWords).join(' ');
    if (clean.split(' ').length > maxWords) summary += '...';
  }
  if (summary.split(' ').length > maxWords) {
    summary = summary.split(' ').slice(0, maxWords).join(' ') + '...';
  }
  return summary;
}

async function fetchECVNJobs() {
  const { data } = await axios.get('https://www.ecvn.org/general-information/open-residency-position');
  const $ = cheerio.load(data);

  // Gather all elements to use Promise.all for geocoding
  const elements = $('div[class*="paragraph--type--minimal-call-to-action"]').toArray();

  const jobs = await Promise.all(
    elements.map(async (el) => {
      const fieldItem = $(el).find('.field--name-field-minimal-cta-text .field--item');
      const rawHtml = fieldItem.html() || '';
      const text = fieldItem.text().replace(/\u00a0/g, ' ').replace(/\s+/g, ' ').trim();

      let title = $(fieldItem).find('strong').first().text().replace(/\u00a0/g, ' ').trim();
      if (!title) {
        title = text.split('.')[0].trim();
      }

      const fullDescription = fieldItem.text().trim();
      const description = summarize(fullDescription, 25);

      let url = $(el).find('.field--name-field-minimal-cta-link a').attr('href');
      if (url && !/^http/.test(url)) {
        url = 'https://www.ecvn.org' + url;
      }

      let organisation = null;
      const strongs = $(fieldItem).find('strong');
      if (strongs.length > 1) {
        organisation = $(strongs[1]).text().replace(/\u00a0/g, ' ').trim();
      } else {
        const orgMatch = fullDescription.match(/Institution:\s*([^\n]+)/i);
        if (orgMatch) organisation = orgMatch[1].trim();
      }

      let date = null;
      const dateMatch = fullDescription.match(/(Closing date|deadline).*?[:\-]?\s*([0-9]{1,2}(?:st|nd|rd|th)?\s+\w+\s*\d{4}|[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{2,4}|[0-9]{1,2}\.\d{1,2}\.\d{2,4})/i);
      if (dateMatch) date = dateMatch[2];

      // City & Country extraction
      let city = null;
      let country = null;
      // Try "City, Country" in title or organisation
      let locMatch = title.match(/([A-Za-z .'-]+),\s*([A-Za-z .'-]+)/);
      if (!locMatch && organisation) {
        locMatch = organisation.match(/([A-Za-z .'-]+),\s*([A-Za-z .'-]+)/);
      }
      if (locMatch) {
        city = locMatch[1].trim();
        country = locMatch[2].trim();
      } else {
        // Try just country from organisation
        const orgCountryMatch = organisation && organisation.match(/([A-Za-z .'-]+)$/);
        if (orgCountryMatch) country = orgCountryMatch[1].trim();
      }

      // Geocode if we have city and/or country
      const geo = await geocodeLocation(city, country);

      if (title && url) {
        return {
          title,
          organisation,
          description,
          url,
          country,
          city,
          date,
          species: "small animal",
          type: "residency",
          source: "ecvn",
          latitude: geo ? geo.latitude : undefined,
          longitude: geo ? geo.longitude : undefined
        };
      }
      return null;
    })
  );

  return jobs.filter(Boolean);
}

module.exports = fetchECVNJobs;
