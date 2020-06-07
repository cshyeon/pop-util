const crypto = require('crypto');

export const hash = (value: String, {algorithm}: {algorithm?: String} = {algorithm: 'sha256'}): String => {
  const hashed = crypto.createHash(algorithm).update(value).digest('hex');
  return hashed;
}