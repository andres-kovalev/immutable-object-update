const { shift } = require('../src');

describe('shift', () => {
    const source = {
        a: {
            a1: [ 1, 2, 3 ]
        }
    };

    it('should remove one value from the beginning of array item', () => {
        const updated = shift(source, 'a.a1');

        expect(updated.a.a1).to.be.eql([ 2, 3 ]);
    });

    it('shouldn\'t create intermediate items if not exists', () => {
        const updated = shift(source, 'b.b1');

        expect(updated).to.not.have.property('b');
    });

    it('should support partial application', () => {
        const shiftFromA1 = shift('a.a1');

        const updated = shiftFromA1(source);

        expect(updated.a.a1).to.be.eql([ 2, 3 ]);
    });

    it('should return frozen object result', () => {
        const updated = shift(source, [ 'a', 'a1' ]);

        // eslint-disable-next-line no-unused-expressions
        expect(updated).to.be.frozen;
    });
});
