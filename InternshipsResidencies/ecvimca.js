const axios = require('axios');
const cheerio = require('cheerio');
const geocodeLocation = require('../utils/geocode'); // Adjust path as needed

async function fetchECVIMCAJobs() {
  const { data } = await axios.get('https://ecvim-ca.college/residency-vacancies/');
  const $ = cheerio.load(data);

  // Grab all job boxes as elements array for async handling
  const elements = $('.elementor-widget-image-box').toArray();

  // Map and await geocoding for each job
  const jobs = await Promise.all(
    elements.map(async (el) => {
      const title = $(el).find('.elementor-image-box-title').text().trim();
      const description = $(el).find('.elementor-image-box-description').text().trim();
      const url = $(el).find('.elementor-image-box-title a').attr('href');
      const organisation = $(el).find('.elementor-image-box-img img').attr('alt') || null;

      // Extract country from title (e.g. "Alfort, France")
      let country = null;
      let city = null;
      const countryMatch = title.match(/, ([A-Za-zÀ-ÿ .'-]{2,})$/i);
      if (countryMatch) country = countryMatch[1].trim();

      // Try to extract city if available ("Alfort, France" => city = "Alfort")
      const cityMatch = title.match(/^(.+?),/);
      if (cityMatch) city = cityMatch[1].trim();

      const species = "small animal";
      const type = "residency";
      const source = "ecvim-ca";
      const date = null;

      // --- Geocode the city+country (falls back to country if city not found) ---
      const geo = await geocodeLocation(city, country);

      return {
        title,
        organisation,
        description,
        url,
        country,
        city,
        date,
        species,
        type,
        source,
        latitude: geo ? geo.latitude : undefined,
        longitude: geo ? geo.longitude : undefined
      };
    })
  );

  return jobs;
}

module.exports = fetchECVIMCAJobs;
