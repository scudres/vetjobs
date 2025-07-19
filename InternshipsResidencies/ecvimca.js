const axios = require('axios');
const cheerio = require('cheerio');
const geocodeLocation = require('../utils/geocode'); // Adjust path if needed
const guessCity = require('../utils/cityGuess');

async function fetchECVIMCAJobs() {
  const { data } = await axios.get('https://ecvim-ca.college/residency-vacancies/');
  const $ = cheerio.load(data);

  // Get all job elements for async geocoding
  const elements = $('.elementor-widget-image-box').toArray();

  const jobs = await Promise.all(
    elements.map(async (el) => {
      const title = $(el).find('.elementor-image-box-title').text().trim();
      const description = $(el).find('.elementor-image-box-description').text().trim();
      const url = $(el).find('.elementor-image-box-title a').attr('href');
      const organisation = $(el).find('.elementor-image-box-img img').attr('alt') || null;

      // Try to extract city and country: "Alfort, France"
      let city = null, country = null;

      const cityCountryMatch = title.match(/^(.+?),\s*([A-Za-zÀ-ÿ .'-]{2,})$/);
      if (cityCountryMatch) {
        city = cityCountryMatch[1].trim();
        country = cityCountryMatch[2].trim();
      } else {
        // If not full pattern, try for just ", Country"
        const countryMatch = title.match(/, ([A-Za-zÀ-ÿ .'-]{2,})$/i);
        if (countryMatch) country = countryMatch[1].trim();

        // Try to guess city if not found
        if (!city) city = guessCity(title) || null;
      }

      // If still no country, try organisation or fallback
      if (!country && organisation) {
        // If org has a country in the name, try to extract
        const orgCountryMatch = organisation.match(/, ([A-Za-zÀ-ÿ .'-]{2,})$/i);
        if (orgCountryMatch) country = orgCountryMatch[1].trim();
      }
      if (!country) country = "Europe"; // fallback

      // Geocode (city + country), fallback to country only
      let latitude, longitude;
      if (city && country) {
        const geo = await geocodeLocation(city, country);
        if (geo) {
          latitude = geo.latitude;
          longitude = geo.longitude;
        }
      }
      if ((!latitude || !longitude) && country) {
        const geo = await geocodeLocation(null, country);
        if (geo) {
          latitude = geo.latitude;
          longitude = geo.longitude;
        }
      }

      return {
        title,
        organisation,
        description,
        url,
        country,
        city,
        date: null,
        species: "small animal",
        type: "residency",
        source: "ecvim-ca",
        latitude,
        longitude
      };
    })
  );

  return jobs;
}

module.exports = fetchECVIMCAJobs;
