'use strict';

const {hash} = require('..');

describe('hash', () => {
    it('hash has same value on same input', () => {
        // TODO: need faker package
        const inputValue = 'someText';
        const hashed = hash(inputValue);

        const loopCount = 1000;
        for(let i = 0; i < loopCount; i++) {
            const hashed2 = hash(inputValue);
            expect(hashed).toBe(hashed2);
        }
    });

    it('hash value is different on different input', () => {
        // TODO: need faker package
        const inputValue1 = 'onlyDifferentTextIsDot';
        const inputValue2 = 'onlyDifferentTextIsDot.';
        const hashed1 = hash(inputValue1);
        const hashed2 = hash(inputValue2);

        expect(hashed1).not.toBe(hashed2);
    });
});
