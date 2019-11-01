const { unshiftAll } = require('../src');

describe('unshiftAll', () => {
    const source = {
        a: {
            a1: [ 1 ]
        }
    };

    it('should add all provided values to the beginning of array item', () => {
        const updated = unshiftAll(source, 'a.a1', [ 2, 3 ]);

        expect(updated.a.a1).to.be.eql([ 2, 3, 1 ]);
    });

    it('shouldn\'t create intermediate items if not exists', () => {
        const updated = unshiftAll(source, 'b.b1', [ 2, 3 ]);

        expect(updated).to.not.have.property('b');
    });

    it('should support partial application', () => {
        const unshiftAllToA1 = unshiftAll('a.a1');
        const unshift2And3ToA1 = unshiftAllToA1([ 2, 3 ]);

        const updated = unshift2And3ToA1(source);

        expect(updated.a.a1).to.be.eql([ 2, 3, 1 ]);
    });

    it('should return frozen object result', () => {
        const updated = unshiftAll(source, [ 'a', 'a1' ], [ 2, 3 ]);

        // eslint-disable-next-line no-unused-expressions
        expect(updated).to.be.frozen;
    });
});
