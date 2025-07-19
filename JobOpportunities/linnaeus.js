const axios = require('axios');
const cheerio = require('cheerio');
const geocodeLocation = require('../utils/geocode'); // Make sure this util exists as discussed
const guessCity = require('../utils/cityGuess');

async function fetchLinnaeusJobs() {
  const baseUrl = 'https://www.linnaeusgroup.co.uk/careers/vacancies';
  let jobs = [];
  let page = 1;
  let hasNext = true;

  function getPageUrl(pageNum) {
    if (pageNum === 1) return baseUrl;
    return `${baseUrl}?start=${(pageNum - 1) * 10}`;
  }

  while (hasNext) {
    try {
      const { data } = await axios.get(getPageUrl(page), {
        headers: { 'User-Agent': 'VetNextStepJobScraper/1.0 (your-email@example.com)' }
      });
      const $ = cheerio.load(data);

      let jobsOnPage = 0;

      const vacancies = $('li.vacancy').toArray();
      for (const el of vacancies) {
        const titleTag = $(el).find('a.title');
        const title = titleTag.text().trim();
        if (!title.toLowerCase().includes('veterinary surgeon')) continue;

        const url = titleTag.attr('href')?.startsWith('http')
          ? titleTag.attr('href')
          : 'https://www.linnaeusgroup.co.uk' + titleTag.attr('href');

        const location = $(el).find('span.address').text().replace('Location:', '').trim();
        const hours = $(el).find('span.tags').text().replace('Hours:', '').trim();
        const practice = $(el).find('span.location').text().replace('Practice:', '').trim();
        const imgTag = $(el).find('img');
        const logo = imgTag.length ? "https://www.linnaeusgroup.co.uk" + imgTag.attr('src') : null;

        // ---- Extract city and country ----
        let city = "";
        let country = "United Kingdom";
        if (location) {
          city = guessCity(location) || location.split(',')[0].trim();
        }

        // ---- Get organisation field, fallback to practice or "Linnaeus Group"
        let organisation = practice || "Linnaeus Group";

        // ---- Geocode (city, country) ----
        let latitude = null, longitude = null;
        try {
          let geo = null;
          if (city && country) geo = await geocodeLocation(city, country);
          if ((!geo || !geo.latitude || !geo.longitude) && country) {
            geo = await geocodeLocation(null, country);
          }
          if (geo) {
            latitude = geo.latitude;
            longitude = geo.longitude;
          }
        } catch (e) {
          // ignore geocode error
        }

        jobs.push({
          title,
          organisation,
          description: `${title} at ${organisation}, ${location} (${hours})`,
          url,
          country,
          city,
          latitude,
          longitude,
          date: null,
          species: "small animal",
          type: "job",
          source: "linnaeus"
        });
        jobsOnPage++;
      }

      hasNext = $(`li.numbered.page-${page + 1}`).length > 0 && jobsOnPage > 0;
      page += 1;
    } catch (error) {
      hasNext = false;
    }
  }

  return jobs;
}

module.exports = fetchLinnaeusJobs;
