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
});
