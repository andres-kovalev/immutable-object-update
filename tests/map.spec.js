const { map } = require('../src');

describe('map', () => {
    const source = {
        a: {
            a1: [ 1, 2, 3, 4, 5 ]
        }
    };
    const add10 = item => item + 10;

    it('should transform values of specified array item', () => {
        const updated = map(source, 'a.a1', add10);

        expect(updated.a.a1).to.be.eql([ 11, 12, 13, 14, 15 ]);
    });

    it('shouldn\'t create intermediate items if not exists', () => {
        const updated = map(source, 'b.b1', add10);

        expect(updated).to.not.have.property('b');
    });

    it('should support partial application', () => {
        const mapA1 = map('a.a1');
        const add10toA1 = mapA1(add10);

        const updated = add10toA1(source);

        expect(updated.a.a1).to.be.eql([ 11, 12, 13, 14, 15 ]);
    });

    it('should return frozen object result', () => {
        const updated = map(source, 'a.a1', add10);

        // eslint-disable-next-line no-unused-expressions
        expect(updated).to.be.frozen;
    });
});
