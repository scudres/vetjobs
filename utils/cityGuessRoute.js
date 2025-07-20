const express = require('express');
const router = express.Router();
const guessCityFromOrganisation = require('./cityGuess');

router.get('/', (req, res) => {
  const organisation = req.query.organisation || '';
  const title = req.query.title || '';
  const city = guessCityFromOrganisation(organisation, title);
  res.json({ city });
});

module.exports = router;
