const { update } = require('../src');

const increment = oldValue => (oldValue || 0) + 1;

describe('update', () => {
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

    context('when string-type path provided', () => {
        it('should update value considering dots as delimiter', () => {
            const result = update(source, 'b.b1', increment);

            expect(result.b.b1).to.be.equal(4);
            expect(result['b.b1']).to.be.equal(source['b.b1']);
        });
    });

    it('should create intermediate items if not exists', () => {
        const result = update(source, 'c.c1', increment);

        expect(result.c.c1).to.be.equal(1);
    });

    it('should support partial application', () => {
        const setB1to6 = update([ 'b', 'b1' ], increment);
        const result = setB1to6(source);

        expect(result.b.b1).to.be.equal(4);
    });

    it('should return frozen object result', () => {
        const result = update(source, [ 'b', 'b1' ], increment);

        // eslint-disable-next-line no-unused-expressions
        expect(result).to.be.frozen;
    });
});
