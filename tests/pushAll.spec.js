const { pushAll } = require('../src');

describe('pushAll', () => {
    const source = {
        a: {
            a1: [ 1 ]
        }
    };

    it('should add all provided values to the end of array item', () => {
        const updated = pushAll(source, 'a.a1', [ 2, 3 ]);

        expect(updated.a.a1).to.be.eql([ 1, 2, 3 ]);
    });

    it('shouldn\'t create intermediate items if not exists', () => {
        const updated = pushAll(source, 'b.b1', [ 2, 3 ]);

        expect(updated).to.not.have.property('b');
    });

    it('should support partial application', () => {
        const pushAllToA1 = pushAll('a.a1');
        const push2And3ToA1 = pushAllToA1([ 2, 3 ]);

        const updated = push2And3ToA1(source);

        expect(updated.a.a1).to.be.eql([ 1, 2, 3 ]);
    });

    it('should return frozen object result', () => {
        const updated = pushAll(source, [ 'a', 'a1' ], [ 2, 3 ]);

        // eslint-disable-next-line no-unused-expressions
        expect(updated).to.be.frozen;
    });
});
