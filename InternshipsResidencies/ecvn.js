const axios = require('axios');
const cheerio = require('cheerio');

// Helper function (duplicate here for now; can move to utils later)
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
  const jobs = [];

  $('div[class*="paragraph--type--minimal-call-to-action"]').each((i, el) => {
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

    let country = null;
    const countryMatch = title.match(/, ([A-Z]{2,})/i) || (organisation && organisation.match(/, ([A-Z]{2,})/i));
    if (countryMatch) country = countryMatch[1];

    const species = "small animal";
    const type = "residency";
    const source = "ecvn";

    if (title && url) {
      jobs.push({
        title,
        organisation,
        description,
        url,
        country,
        date,
        species,
        type,
        source
      });
    }
  });

  return jobs;
}

module.exports = fetchECVNJobs;
