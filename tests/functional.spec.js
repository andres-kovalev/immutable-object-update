const { identity, application, flatMap } = require('../src/functional/common');

describe('functional', () => {
    describe('identity', () => {
        it('should return the same values as provided', () => {
            const value = 'value';

            expect(identity(value)).to.be.equal(value);
        });
    });

    describe('application', () => {
        it('should apply provided transformation', () => {
            const value = 'value';
            const map = item => `${ item }-${ item }`;

            expect(application(value, map)).to.be.equal(map(value));
        });
    });

    describe('flatMap', () => {
        it('should apply provided transformation and flatten array', () => {
            const value = [ [ 1, 2 ], [ 3, 4 ] ];
            const map = item => `value-${ item }`;

            expect(flatMap(value, map)).to.be.eql([ 'value-1', 'value-2', 'value-3', 'value-4' ]);
        });
    });
});
