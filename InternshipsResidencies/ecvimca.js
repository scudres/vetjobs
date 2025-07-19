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

      // 1. Try to get organisation from the image alt tag, fallback to first part of title, then to description
      let organisation = $(el).find('.elementor-image-box-img img').attr('alt')?.trim() || null;
      if (!organisation && title) {
        // Fallback: before first comma in title, if pattern is "Organisation, City, Country"
        const orgMatch = title.match(/^([^-–,]+?)(?:,|–|-)/);
        if (orgMatch) organisation = orgMatch[1].trim();
      }
      if (!organisation && description) {
        const orgMatch = description.match(/(?:at|by|hosted by)\s+([A-Za-zÀ-ÿ .'-]+)/i);
        if (orgMatch) organisation = orgMatch[1].trim();
      }

      // 2. Try to extract city and country: "Alfort, France"
      let city = null, country = null;
      const cityCountryMatch = title.match(/^(.+?),\s*([A-Za-zÀ-ÿ .'-]{2,})$/);
      if (cityCountryMatch) {
        city = cityCountryMatch[1].trim();
        country = cityCountryMatch[2].trim();
      } else {
        // Fallback to just ", Country"
        const countryMatch = title.match(/, ([A-Za-zÀ-ÿ .'-]{2,})$/i);
        if (countryMatch) country = countryMatch[1].trim();
        // Try to guess city if not found
        if (!city) city = guessCity(title) || null;
      }

      // 3. If still no country, try organisation or description
      if (!country && organisation) {
        const orgCountryMatch = organisation.match(/, ([A-Za-zÀ-ÿ .'-]{2,})$/i);
        if (orgCountryMatch) country = orgCountryMatch[1].trim();
      }
      if (!country && description) {
        const descCountryMatch = description.match(/, ([A-Za-zÀ-ÿ .'-]{2,})$/i);
        if (descCountryMatch) country = descCountryMatch[1].trim();
      }
      if (!country) country = "Europe"; // fallback

      // 4. Geocode (city + country), fallback to country only
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
