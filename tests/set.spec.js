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

    context('when array-type path provided', () => {
        it('should update value', () => {
            const newValue = 6;

            const result = set(source, [ 'b', 'b1' ], newValue);

            expect(result.b.b1).to.be.equal(newValue);
        });

        it('should update value not considering dots as delimiter', () => {
            const newValue = 6;

            const result = set(source, [ 'b.b1' ], newValue);

            expect(result['b.b1']).to.be.equal(newValue);
        });
    });

    context('when string-type path provided', () => {
        const newValue = 6;

        let result;
        beforeEach(() => {
            result = set(source, 'b.b1', newValue);
        });

        it('should update value considering dots as delimiter', () => {
            expect(result.b.b1).to.be.equal(newValue);
            expect(result['b.b1']).to.be.equal(source['b.b1']);
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
            expect(result.b.b1).to.not.be.equal(source.b.b1);
        });
    });

    it('should ignore empty path items', () => {
        const newValue = 6;

        const result = set(source, 'b..b1', newValue);

        expect(result.b.b1).to.be.equal(newValue);
    });

    it('should create intermediate items if not exists', () => {
        const newValue = 6;

        const result = set(source, 'c.c1', newValue);

        expect(result.c.c1).to.be.equal(newValue);
    });

    it('should create arrays item if not exists and addressed by index', () => {
        const newValue = 6;

        const result = set(source, 'c.0', newValue);

        expect(result.c).to.be.an('array');
        expect(result.c[0]).to.be.equal(newValue);
    });
});
