const axios = require('axios');
const cheerio = require('cheerio');
const geocodeLocation = require('../utils/geocode'); // Make sure this util exists as discussed

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

      // Use for...of to allow await in loop
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
          // For best precision, try to get the last part after the last comma as city, e.g. "London, SE1 4LS"
          const locParts = location.split(',');
          city = locParts[0].trim();
        }

        // ---- Get lat/lon for city, country ----
        let latitude = null;
        let longitude = null;
        try {
          const geo = await geocodeLocation(city, country);
          if (geo) {
            latitude = geo.latitude;
            longitude = geo.longitude;
          }
        } catch (e) {
          // ignore, leave lat/lon null
        }

        jobs.push({
          title,
          organisation: practice,
          description: `${title} at ${practice}, ${location} (${hours})`,
          url,
          location,
          city,
          country,
          latitude,    // always output as 'latitude'
          longitude,   // always output as 'longitude'
          hours,
          practice,
          logo,
          date: null,
          type: "job",
          species: "small animal",
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
