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

    context('when array-type path provided', () => {
        it('should update value', () => {
            const result = update(source, [ 'b', 'b1' ], increment);

            expect(result.b.b1).to.be.equal(4);
        });

        it('should update value not considering dots as delimiter', () => {
            const result = update(source, [ 'b.b1' ], increment);

            expect(result['b.b1']).to.be.equal(6);
        });
    });

    context('when string-type path provided', () => {
        let result;
        beforeEach(() => {
            result = update(source, 'b.b1', increment);
        });

        it('should update value considering dots as delimiter', () => {
            expect(result.b.b1).to.be.equal(4);
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
        const result = update(source, 'b..b1', increment);

        expect(result.b.b1).to.be.equal(4);
    });

    it('should create intermediate items if not exists', () => {
        const result = update(source, 'c.c1', increment);

        expect(result.c.c1).to.be.equal(1);
    });

    it('should create arrays item if not exists and addressed by index', () => {
        const result = update(source, 'c.0', increment);

        expect(result.c).to.be.an('array');
        expect(result.c[0]).to.be.equal(1);
    });

    it('should support partial application', () => {
        const setB1to6 = update([ 'b', 'b1' ], increment);
        const result = setB1to6(source);

        expect(result.b.b1).to.be.equal(4);
    });
});
