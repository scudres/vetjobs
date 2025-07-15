const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors());

// --- Scraper functions for each source ---
async function fetchECEIMEquineJobs() {
  const { data } = await axios.get('https://www.eceim.info/jobs');
  const $ = cheerio.load(data);
  const jobs = [];

  $('.view-jobs .views-row').each((i, el) => {
    const title = $(el).find('a').first().text().trim();
    const url = 'https://www.eceim.info' + $(el).find('a').attr('href');
    const description = $(el).find('.views-field-body').text().trim();
    const date = $(el).find('.date-display-single').text().trim();

    jobs.push({
      title,
      organisation: null, // Can be improved later
      description,
      url,
      country: null, // Can be improved later
      date,
      species: "equine",
      source: "eceim"
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
    // Optional: allow query filtering
    const { species } = req.query;
    if (species) {
      return res.json(cache.jobs.filter(j => j.species === species));
    }
    return res.json(cache.jobs);
  }

  try {
    let allJobs = [];

    // Add ECEIM jobs (equine)
    const eceimJobs = await fetchECEIMEquineJobs();
    allJobs = allJobs.concat(eceimJobs);

    // Future: add other sources here (e.g., small animal, exotics)

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
