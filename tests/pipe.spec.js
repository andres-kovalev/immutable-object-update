const { pipe } = require('../src');

const map1 = item => `${ item }-1`;
const map2 = item => `${ item }-2`;

describe('pipe', () => {
    let piped;

    beforeEach(() => {
        piped = pipe(map1, map2);
    });

    it('should return function composition', () => {
        expect(piped).to.be.a('function');
    });

    it('should apply source function in right order', () => {
        expect(piped('value')).to.be.equal('value-1-2');
    });
});
