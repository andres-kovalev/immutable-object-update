const { shiftN } = require('../src');

describe('shiftN', () => {
    const source = {
        a: {
            a1: [ 1, 2, 3 ]
        }
    };

    it('should remove number of values from the beginning of array item', () => {
        const updated = shiftN(source, 'a.a1', 2);

        expect(updated.a.a1).to.be.eql([ 3 ]);
    });

    it('shouldn\'t create intermediate items if not exists', () => {
        const updated = shiftN(source, 'b.b1', 2);

        expect(updated).to.not.have.property('b');
    });

    it('should support partial application', () => {
        const shiftNFromA1 = shiftN('a.a1');
        const shift2FromA1 = shiftNFromA1(2);

        const updated = shift2FromA1(source);

        expect(updated.a.a1).to.be.eql([ 3 ]);
    });

    it('should return frozen object result', () => {
        const updated = shiftN(source, [ 'a', 'a1' ], 2);

        // eslint-disable-next-line no-unused-expressions
        expect(updated).to.be.frozen;
    });
});
