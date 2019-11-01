const { filter } = require('../src');

describe('filter', () => {
    const source = {
        a: {
            a1: [ 1, 2, 3, 4, 5 ]
        }
    };
    const isOdd = item => item % 2 === 1;

    it('should filter specified array item', () => {
        const updated = filter(source, 'a.a1', isOdd);

        expect(updated.a.a1).to.be.eql([ 1, 3, 5 ]);
    });

    it('shouldn\'t create intermediate items if not exists', () => {
        const updated = filter(source, 'b.b1', isOdd);

        expect(updated).to.not.have.property('b');
    });

    it('should support partial application', () => {
        const filterA1 = filter('a.a1');
        const filterOddInA1 = filterA1(isOdd);

        const updated = filterOddInA1(source);

        expect(updated.a.a1).to.be.eql([ 1, 3, 5 ]);
    });

    it('should return frozen object result', () => {
        const updated = filter(source, 'a.a1', isOdd);

        // eslint-disable-next-line no-unused-expressions
        expect(updated).to.be.frozen;
    });
});
