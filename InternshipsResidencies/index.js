const fetchECEIMEquineJobs = require('./eceim');
const fetchECVIMCAJobs = require('./ecvimca');
const fetchECVNJobs = require('./ecvn');

async function fetchAllInternshipsResidencies() {
  const [eceim, ecvimca, ecvn] = await Promise.all([
    fetchECEIMEquineJobs(),
    fetchECVIMCAJobs(),
    fetchECVNJobs()
  ]);
  return [].concat(eceim, ecvimca, ecvn);
}

module.exports = fetchAllInternshipsResidencies;
