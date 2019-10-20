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

    context('when array-type path provided', () => {
        it('should remove value', () => {
            const result = remove(source, [ 'b', 'b1' ]);

            expect(result).to.have.property('b.b1');
            expect(result.b).to.not.have.property('b1');
        });

        it('should remove value not considering dots as delimiter', () => {
            const result = remove(source, [ 'b.b1' ]);

            expect(result.b).to.have.property('b1');
            expect(result).to.not.have.property('b.b1');
        });
    });

    context('when string-type path provided', () => {
        let result;
        beforeEach(() => {
            result = remove(source, 'b.b1');
        });

        it('should remove value considering dots as delimiter', () => {
            expect(result).to.have.property('b.b1');
            expect(result.b).to.not.have.property('b1');
        });

        it('should keep same refs for unchanged values', () => {
            expect(result.a).to.be.equal(source.a);
            expect(result.a.a1).to.be.equal(source.a.a1);
            expect(result.a.a2).to.be.equal(source.a.a2);
            expect(result.b.b2).to.be.equal(source.b.b2);
            expect(result['b.b1']).to.be.equal(source['b.b1']);
        });

        it('should update refs for changed values', () => {
            expect(result).to.not.be.equal(source);
            expect(result.b).to.not.be.equal(source.b);
        });
    });

    it('should ignore empty path items', () => {
        const result = remove(source, 'b..b1');

        expect(result.b).to.not.have.property('b1');
    });

    it('should remove items from arrays correctly', () => {
        const result = remove(source, 'c.1');

        expect(result.c).to.have.length(2);
        expect(result.c).to.contain(1);
        expect(result.c).to.not.contain(2);
        expect(result.c).to.contain(3);
    });
});
