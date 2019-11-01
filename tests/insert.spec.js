const { insert } = require('../src');

describe('insert', () => {
    const source = {
        a: {
            a1: [ 1, 2, 3 ]
        }
    };

    it('should add provided value to the specified position of array item', () => {
        const updated = insert(source, 'a.a1.1', 4);

        expect(updated.a.a1).to.be.eql([ 1, 4, 2, 3 ]);
    });

    it('shouldn\'t create intermediate items if not exists', () => {
        const updated = insert(source, 'b.b1', 4);

        expect(updated).to.not.have.property('b');
    });

    it('should support partial application', () => {
        const insertIntoA11 = insert('a.a1.1');
        const insert4InfoA11 = insertIntoA11(4);

        const updated = insert4InfoA11(source);

        expect(updated.a.a1).to.be.eql([ 1, 4, 2, 3 ]);
    });

    it('should return frozen object result', () => {
        const updated = insert(source, 'a.a1.1', 4);

        // eslint-disable-next-line no-unused-expressions
        expect(updated).to.be.frozen;
    });
});
