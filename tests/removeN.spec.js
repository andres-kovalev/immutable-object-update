const { removeN } = require('../src');

describe('removeN', () => {
    const source = {
        a: {
            a1: 1,
            a2: 2
        },
        b: {
            b1: 3,
            b2: 4
        },
        'b.b1': 5,
        c: [ 1, 2, 3 ]
    };

    it('should remove items from arrays correctly', () => {
        const result = removeN(source, 'c.1', 2);

        expect(result.c).to.be.eql([ 1 ]);
    });

    it('should support partial application', () => {
        const removeFromC = removeN('c.1');
        const remove2FromC = removeFromC(2);
        const result = remove2FromC(source);

        expect(result.c).to.be.eql([ 1 ]);
    });

    it('should return frozen object result', () => {
        const result = removeN(source, 'c', 2);

        // eslint-disable-next-line no-unused-expressions
        expect(result).to.be.frozen;
    });

    it('shouldn\'t create intermediate items if not exists', () => {
        const result = removeN(source, 'd.d1');

        expect(result).to.not.have.property('d');
    });
});
