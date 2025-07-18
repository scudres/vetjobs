const fetchLinnaeusJobs = require('./linnaeus');

async function fetchAllJobOpportunities() {
  const [linnaeusJobs] = await Promise.all([
    fetchLinnaeusJobs(),
    // add other job board functions here e.g. fetchVetPartnersJobs()
  ]);
  return [].concat(linnaeusJobs);
}

module.exports = fetchAllJobOpportunities;
