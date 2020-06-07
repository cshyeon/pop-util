'use strict';

const id = require('..');

describe('id', () => {
    it('No conflict test', async () => {
        const randomUIDSet = new Set();

        const loopCount = 1000000;
        for(let i = 0; i < loopCount; i++) {
            const randomUID = id.UID();
            randomUIDSet.add(randomUID);
        }
        
        expect(randomUIDSet.size).toBe(loopCount);
    });

    it('Use prefix', async () => {
        const prefix = 'haha';
        const uid = id.UID({prefix, prefixHash: false});
        const splitByGroup = uid.split('-');

        expect(splitByGroup).toHaveLength(4);
        expect(splitByGroup[0]).toBe(prefix);
    });
});
