const id = require('..');

describe('id', () => {
  it('No conflict test', async () => {
    const randomUIDSet = new Set();

    const loopCount = 1000000;
    for (let i = 0; i < loopCount; i++) {
      const randomUID = id.UID();
      randomUIDSet.add(randomUID);
    }

    expect(randomUIDSet.size).toBe(loopCount);
  });

  it('Use prefix', async () => {
    const prefix = 'haha';
    const uid = id.UID({ prefix, prefixHash: false });
    const splitByGroup = uid.split('-');

    expect(splitByGroup).toHaveLength(4);
    expect(splitByGroup[0]).toBe(prefix);

    const uid2 = id.UID({ prefix });
    const splitByGroup2 = uid2.split('-');
    const hashedPrefix = splitByGroup2[0];

    expect(hashedPrefix).not.toBe(prefix);
  });

  it('Use groupDelimiter param', async () => {
    const groupDelimiter = '#';
    const groupCount = 4;
    const uid = id.UID({ groupDelimiter, groupCount });
    const splitByGroup = uid.split(groupDelimiter);

    expect(splitByGroup).toHaveLength(groupCount);
  });
});
