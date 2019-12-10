const { get } = require('../src');

describe('get', () => {
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

    it('should return value found by string path', () => {
        expect(get(source, 'a.a1')).to.be.equal(1);
    });

    it('should return value found by array path', () => {
        expect(get(source, [ 'b.b1' ])).to.be.equal(5);
    });

    it('should return undefined when item with provided path doesn\'t exists', () => {
        // eslint-disable-next-line no-unused-expressions
        expect(get(source, 'c.c1')).to.be.undefined;
    });

    it('should support partial application', () => {
        const getB1 = get([ 'b', 'b1' ]);

        expect(getB1(source)).to.be.equal(3);
    });
});
