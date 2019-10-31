const { remove } = require('../src');

describe('remove', () => {
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

    context('when string-type path provided', () => {
        it('should remove value considering dots as delimiter', () => {
            const result = remove(source, 'b.b1');

            expect(result).to.have.property('b.b1');
            expect(result.b).to.not.have.property('b1');
        });
    });

    it('should remove items from arrays correctly', () => {
        const result = remove(source, 'c.1');

        expect(result.c).to.be.eql([ 1, 3 ]);
    });

    it('should support partial application', () => {
        const removeB1 = remove([ 'b', 'b1' ]);
        const result = removeB1(source);

        expect(result).to.have.property('b.b1');
        expect(result.b).to.not.have.property('b1');
    });

    it('should return frozen object result', () => {
        const result = remove(source, [ 'b', 'b1' ]);

        // eslint-disable-next-line no-unused-expressions
        expect(result).to.be.frozen;
    });

    it('shouldn\'t create intermediate items if not exists', () => {
        const result = remove(source, 'd.d1');

        expect(result).to.not.have.property('d');
    });
});
