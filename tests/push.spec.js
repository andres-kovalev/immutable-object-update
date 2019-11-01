const { push } = require('../src');

describe('push', () => {
    const source = {
        a: {
            a1: [ 1 ]
        }
    };

    it('should add provided value to the end of array item', () => {
        const updated = push(source, 'a.a1', 2);

        expect(updated.a.a1).to.be.eql([ 1, 2 ]);
    });

    it('shouldn\'t create intermediate items if not exists', () => {
        const updated = push(source, 'b.b1', 2);

        expect(updated).to.not.have.property('b');
    });

    it('should support partial application', () => {
        const pushToA1 = push('a.a1');
        const push2ToA1 = pushToA1(2);

        const updated = push2ToA1(source);

        expect(updated.a.a1).to.be.eql([ 1, 2 ]);
    });

    it('should return frozen object result', () => {
        const updated = push(source, [ 'a', 'a1' ], 2);

        // eslint-disable-next-line no-unused-expressions
        expect(updated).to.be.frozen;
    });
});
