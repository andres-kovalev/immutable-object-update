<a name="pipe"></a>

## pipe(...ops) ⇒ <code>function</code>
Combines several operations into one (to upply later)

**Returns**: <code>function</code> - combined update operation  
**Params**

- ...ops <code>function</code> - operations to combine



**Description**

```jsimport { pipe, set } from 'immutable-object-update';const state = {    a: {        a1: 1,        a2: 2    },    b: {        b1: 3,        b2: 4    }};const setA1to10andB1to30 = pipe(    set('a.a1', 10),    set('b.b1', 30));const updated = setA1to10andB1to30(state);```As a result we will receive new object with structure below:```js{    a: {        a1: 10,        a2: 2    },    b: {        b1: 30,        b2: 5    }}```