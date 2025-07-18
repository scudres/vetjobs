const express = require('express');
const fetchAllInternshipsResidencies = require('../InternshipsResidencies');
const { normalizeCountry, normalizeCity } = require('../utils');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    let jobs = await fetchAllInternshipsResidencies();

    jobs = jobs.map(job => ({
      ...job,
      country: job.country ? normalizeCountry(job.country) : "",
      city: job.city ? normalizeCity(job.city) : "",
    }));

    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch internships/residencies" });
  }
});

module.exports = router;
