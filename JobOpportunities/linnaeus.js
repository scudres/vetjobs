const axios = require('axios');
const cheerio = require('cheerio');

// Geocode function using OpenStreetMap Nominatim
async function geocodeCity(city, country) {
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(city + ', ' + country)}`;
  try {
    const { data } = await axios.get(url, {
      headers: { 'User-Agent': 'VetNextStepJobScraper/1.0 (your-email@example.com)' }
    });
    if (data && data.length > 0) {
      return {
        lat: parseFloat(data[0].lat),
        lon: parseFloat(data[0].lon)
      };
    }
  } catch (err) {
    // ignore geocode failures, return nothing
  }
  return { lat: null, lon: null };
}

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
      const { data } = await axios.get(getPageUrl(page));
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

        // ---- NEW: Extract city and country ----
        let city = "";
        let country = "United Kingdom";
        if (location) {
          city = location.split(',')[0].trim();
        }

        // ---- NEW: Get lat/lon for city, country ----
        const { lat, lon } = await geocodeCity(city, country);

        jobs.push({
          title,
          organisation: practice,
          description: `${title} at ${practice}, ${location} (${hours})`,
          url,
          location,
          city,
          country,
          lat,        // <---- add these!
          lon,        // <---- add these!
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
