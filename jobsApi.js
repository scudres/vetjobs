const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors());

// --- ECEIM Equine Jobs ---
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

// --- ECVIM-CA Small Animal Internal Medicine Jobs ---
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

// --- ECVN Small Animal Neurology Residency Jobs ---
async function fetchECVNJobs() {
  const { data } = await axios.get('https://www.ecvn.org/general-information/open-residency-position');
  const $ = cheerio.load(data);
  const jobs = [];

  $('.paragraph--type--minimal-call-to-action').each((i, el) => {
    // Main job text content
    const fieldItem = $(el).find('.field--name-field-minimal-cta-text .field--item');
    const rawHtml = fieldItem.html() || '';
    const text = fieldItem.text().trim();

    // Title: first <strong>
    let title = $(fieldItem).find('strong').first().text().replace(/\u00a0/g, ' ').trim();
    if (!title) title = text.split('\n')[0];

    // Description: the full job ad text
    let description = text;

    // URL (external link)
    let url = $(el).find('.field--name-field-minimal-cta-link a').attr('href');
    if (url && !/^http/.test(url)) {
      url = 'https://www.ecvn.org' + url;
    }

    // Organisation: try 2nd <strong> or first sentence after title
    let organisation = null;
    const strongs = $(fieldItem).find('strong');
    if (strongs.length > 1) {
      organisation = $(strongs[1]).text().replace(/\u00a0/g, ' ').trim();
    } else {
      organisation = description.split('\n')[1] || null;
    }

    // Date: try "Closing date" line
    let date = null;
    const dateMatch = description.match(/Closing date.*?[:\-]?\s*([0-9]{1,2}[a-z]{2,3}\s+\w+|[0-9]{1,2}(st|nd|rd|th)?\s+\w+\s*[0-9]{2,4}|[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{2,4}|[0-9]{1,2}\.\d{1,2}\.\d{2,4}|[0-9]{1,2}(st|nd|rd|th)?\.\s*\w+\s*[0-9]{2,4})/i);
    if (dateMatch) date = dateMatch[1];

    // Country: try to extract from title
    let country = null;
    const countryMatch = title.match(/, ([A-Z]{2,})/i);
    if (countryMatch) country = countryMatch[1];

    const species = "small animal";
    const type = "residency";
    const source = "ecvn";

    if (title && url) {
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
    }
  });

  return jobs;
}

// --- In-memory cache (all job sources) ---
let cache = {
  timestamp: 0,
  jobs: []
};
const CACHE_DURATION = 1000 * 60 * 60; // 1 hour

// --- Main endpoint: /api/jobs ---
app.get('/api/jobs', async (req, res) => {
  const now = Date.now();
  // Use cache if not expired
  if (cache.jobs.length && (now - cache.timestamp) < CACHE_DURATION) {
    const { species } = req.query;
    if (species) {
      return res.json(cache.jobs.filter(j => j.species === species));
    }
    return res.json(cache.jobs);
  }

  try {
    // Fetch all sources in parallel
    const [eceimJobs, ecvimcaJobs, ecvnJobs] = await Promise.all([
      fetchECEIMEquineJobs(),
      fetchECVIMCAJobs(),
      fetchECVNJobs()
    ]);
    let allJobs = [].concat(eceimJobs, ecvimcaJobs, ecvnJobs);

    // Optional: allow query filtering by species
    const { species } = req.query;
    let filteredJobs = allJobs;
    if (species) {
      filteredJobs = allJobs.filter(j => j.species === species);
    }

    // Update cache
    cache = {
      jobs: allJobs,
      timestamp: now
    };

    res.json(filteredJobs);

  } catch (error) {
    console.error('Error fetching jobs:', error.message);
    if (cache.jobs.length) {
      return res.json(cache.jobs);
    }
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
});

// --- Root endpoint ---
app.get('/', (req, res) => {
  res.send('VetJobs API is running. Use /api/jobs for all jobs.');
});

app.listen(PORT, () => {
  console.log(`✅ VetJobs API running at http://localhost:${PORT}/api/jobs`);
});
