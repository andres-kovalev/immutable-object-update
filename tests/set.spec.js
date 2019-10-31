const { set } = require('../src');

describe('set', () => {
    const source = {
        a: {
            a1: 1,
            a2: 2
        },
        b: {
            b1: 3,
            b2: 4
        },
        'b.b1': 5
    };

    it('should set provided value', () => {
        const updated = set(source, 'a.a1', 10);

        expect(updated.a.a1).to.be.equal(10);
    });

    it('should create intermediate items if not exists', () => {
        const newValue = 6;

        const result = set(source, 'c.c1', newValue);

        expect(result.c.c1).to.be.equal(newValue);
    });

    it('should support partial application', () => {
        const newValue = 6;

        const setB1to6 = set([ 'b', 'b1' ], newValue);
        const result = setB1to6(source);

        expect(result.b.b1).to.be.equal(newValue);
    });

    it('should return frozen object result', () => {
        const newValue = 6;

        const result = set(source, [ 'b', 'b1' ], newValue);

        // eslint-disable-next-line no-unused-expressions
        expect(result).to.be.frozen;
    });
});
