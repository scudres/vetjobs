// utils/geocode.js
const axios = require('axios');

const geoCache = new Map(); // In-memory cache for dev; swap for Redis etc in prod

async function geocodeLocation(city, country) {
  if (!country) return null;
  let query = country;
  if (city && city.toLowerCase() !== "nationwide") {
    query = `${city}, ${country}`;
  }
  // Avoid repeated geocoding of the same query
  if (geoCache.has(query)) return geoCache.get(query);

  // Use Nominatim OpenStreetMap API
  const url = 'https://nominatim.openstreetmap.org/search';
  try {
    const { data } = await axios.get(url, {
      params: {
        q: query,
        format: 'json',
        limit: 1
      },
      headers: {
        "User-Agent": "vetjobs-app/1.0" // Good manners for OSM!
      }
    });
    if (data && data.length > 0) {
      const coords = {
        latitude: parseFloat(data[0].lat),
        longitude: parseFloat(data[0].lon)
      };
      geoCache.set(query, coords); // Cache result
      return coords;
    }
  } catch (err) {
    console.error(`Geocoding failed for "${query}":`, err.message);
  }
  geoCache.set(query, null);
  return null;
}

module.exports = geocodeLocation;
