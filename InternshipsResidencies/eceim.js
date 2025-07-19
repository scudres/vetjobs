const axios = require('axios');
const cheerio = require('cheerio');
const geocodeLocation = require('../utils/geocode'); // adjust path if needed
const guessCity = require('../utils/cityGuess');

async function fetchECEIMEquineJobs() {
  const { data } = await axios.get('https://www.eceim.info/jobs');
  const $ = cheerio.load(data);

  const elements = $('.view-jobs .views-row').toArray();

  const jobs = await Promise.all(
    elements.map(async (el) => {
      const title = $(el).find('.views-field-body p').text().trim();
      const description = title;
      const url = 'https://www.eceim.info' + $(el).find('.views-field-view-node a').attr('href');
      const date = $(el).find('.views-field-created time').text().trim();

      // 1. Try to extract city/country from the title
      let city = null, country = null;

      // e.g., "Residency in Equine Internal Medicine – Bern, Switzerland"
      const locMatch = title.match(/[–-]\s*([\w\s'.-]+?),\s*([A-Za-zÀ-ÿ .'-]+)/);
      if (locMatch) {
        city = locMatch[1].trim();
        country = locMatch[2].trim();
      } else {
        // Try: ", Country" only
        const countryMatch = title.match(/,\s*([A-Za-zÀ-ÿ .'-]{2,})$/);
        if (countryMatch) country = countryMatch[1].trim();
      }

      // 2. Fallback: use guessCity if city is still missing
      if (!city) {
        city = guessCity(title) || null;
      }

      // 3. Default country to "Europe" if not otherwise set (you may want to improve this logic)
      if (!country) country = "Europe";

      // 4. Geocode (city, country)
      let latitude, longitude;
      if (city && country) {
        const geo = await geocodeLocation(city, country);
        if (geo) {
          latitude = geo.latitude;
          longitude = geo.longitude;
        }
      }
      // fallback: try geocoding just the country
      if ((!latitude || !longitude) && country) {
        const geo = await geocodeLocation(null, country);
        if (geo) {
          latitude = geo.latitude;
          longitude = geo.longitude;
        }
      }

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
        latitude,
        longitude,
      };
    })
  );

  return jobs;
}

module.exports = fetchECEIMEquineJobs;
