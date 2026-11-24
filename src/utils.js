const crypto = require('crypto');

function genererToken() {
  return crypto.randomBytes(16).toString('hex');
}

function classer(note) {
  if (note === 20) return 'parfait';
  if (note >= 10) return 'admis';
  return 'refusé';
}

module.exports = { genererToken, classer };
