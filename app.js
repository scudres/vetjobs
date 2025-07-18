const express = require('express');
const cors = require('cors');
const internshipsResidenciesApi = require('./api/internshipsResidencies');
const jobOpportunitiesApi = require('./api/jobOpportunities');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use('/api/internships-residencies', internshipsResidenciesApi);
app.use('/api/job-opportunities', jobOpportunitiesApi);

app.get('/', (req, res) => {
  res.send('VetJobs API is running. Try /api/internships-residencies or /api/job-opportunities');
});

app.listen(PORT, () => {
  console.log(`✅ VetJobs API running at http://localhost:${PORT}`);
});
