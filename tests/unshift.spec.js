const { unshift } = require('../src');

describe('unshift', () => {
    const source = {
        a: {
            a1: [ 1 ]
        }
    };

    it('should add provided value to the beginning of array item', () => {
        const updated = unshift(source, 'a.a1', 2);

        expect(updated.a.a1).to.be.eql([ 2, 1 ]);
    });

    it('shouldn\'t create intermediate items if not exists', () => {
        const updated = unshift(source, 'b.b1', 2);

        expect(updated).to.not.have.property('b');
    });

    it('should support partial application', () => {
        const unshiftToA1 = unshift('a.a1');
        const unshift2ToA1 = unshiftToA1(2);

        const updated = unshift2ToA1(source);

        expect(updated.a.a1).to.be.eql([ 2, 1 ]);
    });

    it('should return frozen object result', () => {
        const updated = unshift(source, [ 'a', 'a1' ], 2);

        // eslint-disable-next-line no-unused-expressions
        expect(updated).to.be.frozen;
    });
});
