const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

// Allow CORS so your React app can fetch
app.use(cors());

// Simple in-memory cache
let cache = {
  timestamp: 0,
  jobs: []
};
const CACHE_DURATION = 1000 * 60 * 60; // 1 hour (ms) - adjust as needed

app.get('/api/eceim-jobs', async (req, res) => {
  const now = Date.now();

  // 1. Return cache if still fresh
  if (cache.jobs.length > 0 && (now - cache.timestamp) < CACHE_DURATION) {
    return res.json(cache.jobs);
  }

  // 2. If cache expired or empty, fetch fresh data
  try {
    console.log(`[${new Date().toISOString()}] Fetching fresh ECEIM jobs...`);
    const { data } = await axios.get('https://www.eceim.info/jobs');
    const $ = cheerio.load(data);
    const jobs = [];

    // ECEIM job listing structure (update if their HTML changes!)
    $('.view-jobs .views-row').each((i, el) => {
      const title = $(el).find('a').first().text().trim();
      const url = 'https://www.eceim.info' + $(el).find('a').attr('href');
      const description = $(el).find('.views-field-body').text().trim();
      const date = $(el).find('.date-display-single').text().trim();

      // Only push equine medicine jobs if you want to filter here!
      // if (!title.toLowerCase().includes('equine')) return;

      jobs.push({ title, url, description, date });
    });

    // Update cache
    cache = { jobs, timestamp: now };

    // Send to client
    return res.json(jobs);

  } catch (error) {
    console.error('Error fetching ECEIM jobs:', error.message);
    // Optionally, serve cached data if available
    if (cache.jobs.length) {
      return res.json(cache.jobs);
    }
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
});

app.get('/', (req, res) => {
  res.send('ECEIM Jobs API is running. Use /api/eceim-jobs for data.');
});

app.listen(PORT, () => {
  console.log(`✅ ECEIM Jobs API running at http://localhost:${PORT}/api/eceim-jobs`);
});
