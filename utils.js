// utils.js

const countryMap = {
  // UK
  "uk": "United Kingdom",
  "u.k.": "United Kingdom",
  "united kingdom": "United Kingdom",
  "england": "United Kingdom",
  "scotland": "United Kingdom",
  "wales": "United Kingdom",
  "northern ireland": "United Kingdom",
  "gb": "United Kingdom",
  "g.b.": "United Kingdom",
  "great britain": "United Kingdom",
  "britain": "United Kingdom",

  // USA
  "us": "United States of America",
  "u.s.": "United States of America",
  "usa": "United States of America",
  "u.s.a.": "United States of America",
  "america": "United States of America",
  "united states": "United States of America",
  "united states of america": "United States of America",

  // Canada
  "canada": "Canada",

  // Australia
  "australia": "Australia",
  "aus": "Australia",

  // New Zealand
  "new zealand": "New Zealand",
  "nz": "New Zealand",

  // Ireland
  "ireland": "Ireland",
  "eire": "Ireland",
  "republic of ireland": "Ireland",

  // South Africa
  "south africa": "South Africa",
  "rsa": "South Africa",

  // Add more as needed!
};

function normalizeCountry(countryRaw) {
  if (!countryRaw) return "";
  let country = countryRaw.trim().toLowerCase();

  // Remove noise words
  country = country.replace(/\b(the|of|and|,)\b/g, "").replace(/\s+/g, " ").trim();

  // Direct map first
  if (countryMap[country]) {
    return countryMap[country];
  }

  // Fuzzy match: find a key that is included in the string
  for (const alias in countryMap) {
    if (country.includes(alias)) {
      return countryMap[alias];
    }
  }

  // Capitalize each word for fallback (looks cleaner)
  return countryRaw
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

// Optionally, a city normalizer (keeps it simple, you can improve)
function normalizeCity(cityRaw) {
  if (!cityRaw) return "";
  return cityRaw.trim()
    .toLowerCase()
    .replace(/\b(city of|,|and|the)\b/g, "")
    .replace(/\s+/g, " ")
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

module.exports = { normalizeCountry, normalizeCity };
