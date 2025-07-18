const express = require('express');
const fetchAllJobOpportunities = require('../JobOpportunities');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const jobs = await fetchAllJobOpportunities();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch job opportunities" });
  }
});

module.exports = router;
