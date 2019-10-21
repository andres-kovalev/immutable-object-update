const { apply } = require('../src');

const map1 = item => `${ item }-1`;
const map2 = item => `${ item }-2`;

describe('apply', () => {
    it('should apply source function in right order', () => {
        expect(apply('value', map1, map2)).to.be.equal('value-1-2');
    });

    it('should apply functions provided with array', () => {
        expect(apply('value', [ map1, map2 ])).to.be.equal('value-1-2');
    });
});
