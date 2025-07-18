const axios = require('axios');
const cheerio = require('cheerio');

async function fetchECEIMEquineJobs() {
  const { data } = await axios.get('https://www.eceim.info/jobs');
  const $ = cheerio.load(data);
  const jobs = [];

  $('.view-jobs .views-row').each((i, el) => {
    const title = $(el).find('.views-field-body p').text().trim();
    const description = title;
    const url = 'https://www.eceim.info' + $(el).find('.views-field-view-node a').attr('href');
    const date = $(el).find('.views-field-created time').text().trim();

    jobs.push({
      title,
      organisation: null,
      description,
      url,
      country: null,
      date,
      species: "equine",
      type: "residency",
      source: "eceim"
    });
  });

  return jobs;
}

module.exports = fetchECEIMEquineJobs;
