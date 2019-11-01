const { insertAll } = require('../src');

describe('insertAll', () => {
    const source = {
        a: {
            a1: [ 1, 2, 3 ]
        }
    };

    it('should add all provided values to the specified position of array item', () => {
        const updated = insertAll(source, 'a.a1.1', [ 4, 5 ]);

        expect(updated.a.a1).to.be.eql([ 1, 4, 5, 2, 3 ]);
    });

    it('shouldn\'t create intermediate items if not exists', () => {
        const updated = insertAll(source, 'b.b1', [ 4, 5 ]);

        expect(updated).to.not.have.property('b');
    });

    it('should support partial application', () => {
        const insertIntoA11 = insertAll('a.a1.1');
        const insert45InfoA11 = insertIntoA11([ 4, 5 ]);

        const updated = insert45InfoA11(source);

        expect(updated.a.a1).to.be.eql([ 1, 4, 5, 2, 3 ]);
    });

    it('should return frozen object result', () => {
        const updated = insertAll(source, 'a.a1.1', [ 4, 5 ]);

        // eslint-disable-next-line no-unused-expressions
        expect(updated).to.be.frozen;
    });
});
