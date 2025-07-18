const express = require('express');
const fetchAllInternshipsResidencies = require('../InternshipsResidencies');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const jobs = await fetchAllInternshipsResidencies();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch internships/residencies" });
  }
});

module.exports = router;
