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
      // 1. Title and description
      const title = $(el).find('.views-field-body p').text().trim();
      const description = title;

      // 2. Try to get organisation if present
      let organisation = null;
      // Try: find org name in the "Organisation" field, or look for clues in job card
      // This selector is a guess, update as needed for real HTML!
      organisation =
        $(el).find('.views-field-field-organisation').text().trim() ||
        $(el).find('.views-field-organisation').text().trim() ||
        null;

      // Fallback: try to parse from title or description, e.g. "...at EnvA, France"
      if (!organisation) {
        const orgMatch = title.match(/at ([A-Za-zÀ-ÿ .'-]+)/i);
        if (orgMatch) organisation = orgMatch[1].trim();
      }

      // 3. URL & Date
      const url = 'https://www.eceim.info' + $(el).find('.views-field-view-node a').attr('href');
      const date = $(el).find('.views-field-created time').text().trim();

      // 4. Try to extract city/country from the title
      let city = null, country = null;
      const locMatch = title.match(/[–-]\s*([\w\s'.-]+?),\s*([A-Za-zÀ-ÿ .'-]+)/);
      if (locMatch) {
        city = locMatch[1].trim();
        country = locMatch[2].trim();
      } else {
        const countryMatch = title.match(/,\s*([A-Za-zÀ-ÿ .'-]{2,})$/);
        if (countryMatch) country = countryMatch[1].trim();
      }

      // Fallback: use guessCity if city is still missing
      if (!city) {
        city = guessCity(title) || null;
      }

      // Fallback: if organisation contains a location, try to extract city/country from that
      if (!city && organisation) {
        const orgLoc = organisation.match(/([A-Za-zÀ-ÿ .'-]+),\s*([A-Za-zÀ-ÿ .'-]+)/);
        if (orgLoc) {
          city = orgLoc[1].trim();
          country = orgLoc[2].trim();
        }
      }

      // Default country if not otherwise set
      if (!country) country = "Europe";

      // 5. Geocode (city, country)
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

      // Debug
      // console.log({ title, organisation, city, country, latitude, longitude });

      return {
        title,
        organisation,
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
