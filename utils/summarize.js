function summarize(text, maxWords = 25) {
  let clean = text.replace(/\s+/g, ' ').trim();
  let summary = clean.split('. ')[0];
  if (!summary || summary.length < 10) {
    summary = clean.split(' ').slice(0, maxWords).join(' ');
    if (clean.split(' ').length > maxWords) summary += '...';
  }
  if (summary.split(' ').length > maxWords) {
    summary = summary.split(' ').slice(0, maxWords).join(' ') + '...';
  }
  return summary;
}

module.exports = summarize;
