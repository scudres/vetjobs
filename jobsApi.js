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
    const description = title; // No other description, so use the same
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
      source: "eceim"
    });
  });

  return jobs;
}

// --- ECVIM-CA Small Animal Jobs ---
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

    // All ECVIM-CA positions are usually small animal, adjust as needed
    const species = "small animal";

    // No explicit date on this site
    const date = null;

    jobs.push({
      title,
      organisation,
      description,
      url,
      country,
      date,
      species,
      source: "ecvim-ca"
    });
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
    // Fetch both sources in parallel
    const [eceimJobs, ecvimcaJobs] = await Promise.all([
      fetchECEIMEquineJobs(),
      fetchECVIMCAJobs()
    ]);
    let allJobs = [].concat(eceimJobs, ecvimcaJobs);

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
