const { pop } = require('../src');

describe('pop', () => {
    const source = {
        a: {
            a1: [ 1, 2, 3 ]
        }
    };

    it('should remove one value from the end of array item', () => {
        const updated = pop(source, 'a.a1');

        expect(updated.a.a1).to.be.eql([ 1, 2 ]);
    });

    it('shouldn\'t create intermediate items if not exists', () => {
        const updated = pop(source, 'b.b1');

        expect(updated).to.not.have.property('b');
    });

    it('should support partial application', () => {
        const popFromA1 = pop('a.a1');

        const updated = popFromA1(source);

        expect(updated.a.a1).to.be.eql([ 1, 2 ]);
    });

    it('should return frozen object result', () => {
        const updated = pop(source, [ 'a', 'a1' ]);

        // eslint-disable-next-line no-unused-expressions
        expect(updated).to.be.frozen;
    });
});
