const axios = require('axios');
const cheerio = require('cheerio');

async function fetchECVIMCAJobs() {
  const { data } = await axios.get('https://ecvim-ca.college/residency-vacancies/');
  const $ = cheerio.load(data);
  const jobs = [];

  $('.elementor-widget-image-box').each((i, el) => {
    const title = $(el).find('.elementor-image-box-title').text().trim();
    const description = $(el).find('.elementor-image-box-description').text().trim();
    const url = $(el).find('.elementor-image-box-title a').attr('href');
    const organisation = $(el).find('.elementor-image-box-img img').attr('alt') || null;

    // Try to extract country from title (e.g. ", UK")
    let country = null;
    const countryMatch = title.match(/, ([A-Za-z ]{2,})$/i);
    if (countryMatch) country = countryMatch[1].trim();

    const species = "small animal";
    const type = "residency";
    const source = "ecvim-ca";
    const date = null;

    jobs.push({
      title,
      organisation,
      description,
      url,
      country,
      date,
      species,
      type,
      source
    });
  });

  return jobs;
}

module.exports = fetchECVIMCAJobs;
