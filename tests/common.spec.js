const { update, isNumber, extractSubPath, updateArray } = require('../src/operations/common');

describe('common', () => {
    describe('isNumber', () => {
        it('should return true for number', () => {
            // eslint-disable-next-line no-unused-expressions
            expect(isNumber('123')).to.be.true;
        });

        it('should return false for non numbers', () => {
            // eslint-disable-next-line no-unused-expressions
            expect(isNumber('123a')).to.be.false;
        });
    });

    describe('extractSubPath', () => {
        it('should split path into item path and value path', () => {
            const path = [ 'item-1', 'item-2', 'item-3', 'item-4' ];

            const [ itemPath, valuePath ] = extractSubPath(path);

            expect(itemPath).to.be.eql([ 'item-1', 'item-2', 'item-3' ]);
            expect(valuePath).to.be.equal('item-4');
        });
    });

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
        const increment = oldValue => (oldValue || 0) + 1;

        context('by default', () => {
            let result;

            beforeEach(() => {
                result = update(source, [ 'b', 'b1' ], increment);
            });

            it('should update value', () => {
                expect(result.b.b1).to.be.equal(4);
            });

            it('should update value not considering dots as delimiter', () => {
                const result2 = update(source, [ 'b.b1' ], increment);

                expect(result2['b.b1']).to.be.equal(6);
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
            const result = update(source, [ 'b', '', 'b1' ], increment);

            expect(result.b.b1).to.be.equal(4);
        });

        it('shouldn\'t create intermediate items by default', () => {
            const result = update(source, [ 'c', 'c1' ], increment);

            expect(result).to.not.have.property('c');
        });

        it('should create intermediate items if not exists when shouldCreateIntermediate is true', () => {
            const result = update(source, [ 'c', 'c1' ], increment, true);

            expect(result.c.c1).to.be.equal(1);
        });

        it('should create arrays item if not exists and addressed by index', () => {
            const result = update(source, [ 'c', '0' ], increment, true);

            expect(result.c).to.be.an('array');
            expect(result.c[0]).to.be.equal(1);
        });
    });

    describe('updateArray', () => {
        const object = {
            a: [],
            b: {}
        };
        const replaceWith0 = () => 0;

        it('should update value of array type', () => {
            const updated = updateArray(object, 'a', replaceWith0);

            expect(updated.a).to.be.equal(0);
        });

        it('shouldn\'t update value of non-array type', () => {
            const updated = updateArray(object, 'b', replaceWith0);

            expect(updated.b).to.not.be.equal(0);
        });

        it('shouldn\'t create intermediate items when not exists', () => {
            const updated = updateArray(object, 'c.d', replaceWith0);

            expect(updated).to.not.have.property('c');
        });
    });
});
