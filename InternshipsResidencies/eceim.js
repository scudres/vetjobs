const axios = require('axios');
const cheerio = require('cheerio');
const geocodeLocation = require('../utils/geocode'); // adjust path if needed

async function fetchECEIMEquineJobs() {
  const { data } = await axios.get('https://www.eceim.info/jobs');
  const $ = cheerio.load(data);

  // Gather all elements to use Promise.all for async geocoding
  const elements = $('.view-jobs .views-row').toArray();

  const jobs = await Promise.all(
    elements.map(async (el) => {
      const title = $(el).find('.views-field-body p').text().trim();
      const description = title;
      const url = 'https://www.eceim.info' + $(el).find('.views-field-view-node a').attr('href');
      const date = $(el).find('.views-field-created time').text().trim();

      // Try to extract city and country from title, format: "Residency in Equine Internal Medicine – Bern, Switzerland"
      let country = null;
      let city = null;

      // Try to find patterns like: "— City, Country" or "- City, Country"
      const locMatch = title.match(/[–-]\s*([\w\s'.-]+?),\s*([A-Za-zÀ-ÿ .'-]+)/);
      if (locMatch) {
        city = locMatch[1].trim();
        country = locMatch[2].trim();
      }

      // If not found, fallback to null
      // If only country in title, catch it
      if (!country) {
        const countryMatch = title.match(/,\s*([A-Za-zÀ-ÿ .'-]{2,})$/);
        if (countryMatch) country = countryMatch[1].trim();
      }

      // Geocode (city + country)
      const geo = await geocodeLocation(city, country);

      return {
        title,
        organisation: null,
        description,
        url,
        country,
        city,
        date,
        species: "equine",
        type: "residency",
        source: "eceim",
        latitude: geo ? geo.latitude : undefined,
        longitude: geo ? geo.longitude : undefined
      };
    })
  );

  return jobs;
}

module.exports = fetchECEIMEquineJobs;
