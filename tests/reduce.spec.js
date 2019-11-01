const { reduce } = require('../src');

describe('reduce', () => {
    const source = {
        a: {
            a1: [ 1, 2, 3, 4, 5 ]
        }
    };
    const sum = (acc, item) => acc + item;

    it('should reduce specified array item', () => {
        const updated = reduce(source, 'a.a1', sum);

        expect(updated.a.a1).to.be.eql(15);
    });

    it('shouldn\'t create intermediate items if not exists', () => {
        const updated = reduce(source, 'b.b1', sum);

        expect(updated).to.not.have.property('b');
    });

    it('should support partial application', () => {
        const reduceA1 = reduce('a.a1');
        const sumA1 = reduceA1(sum);

        const updated = sumA1(source);

        expect(updated.a.a1).to.be.eql(15);
    });

    it('should return frozen object result', () => {
        const updated = reduce(source, 'a.a1', sum);

        // eslint-disable-next-line no-unused-expressions
        expect(updated).to.be.frozen;
    });
});
