const crypto = require('crypto');

const hash = (
  value: string,
  { algorithm = 'sha256' }: { algorithm?: string } = {}
): string => {
  const hashed = crypto.createHash(algorithm).update(value).digest('hex');
  return hashed;
};

export default hash;
