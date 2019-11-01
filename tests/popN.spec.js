const { popN } = require('../src');

describe('popN', () => {
    const source = {
        a: {
            a1: [ 1, 2, 3 ]
        }
    };

    it('should remove number of values from the end of array item', () => {
        const updated = popN(source, 'a.a1', 2);

        expect(updated.a.a1).to.be.eql([ 1 ]);
    });

    it('shouldn\'t create intermediate items if not exists', () => {
        const updated = popN(source, 'b.b1', 2);

        expect(updated).to.not.have.property('b');
    });

    it('should support partial application', () => {
        const popNFromA1 = popN('a.a1');
        const pop2FromA1 = popNFromA1(2);

        const updated = pop2FromA1(source);

        expect(updated.a.a1).to.be.eql([ 1 ]);
    });

    it('should return frozen object result', () => {
        const updated = popN(source, [ 'a', 'a1' ], 2);

        // eslint-disable-next-line no-unused-expressions
        expect(updated).to.be.frozen;
    });
});
