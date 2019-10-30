<a name="apply"></a>

## apply(object, ...ops) ⇒ <code>Object</code> \| <code>Array.&lt;any&gt;</code>
`apply()` function can help to apply several operations at once:

**Returns**: <code>Object</code> \| <code>Array.&lt;any&gt;</code> - updated object
**Params**

- object <code>Object</code> | <code>Array.&lt;any&gt;</code> - object to updates
- ...ops <code>function</code> - ops to apply



**Description**

```js
import { apply, set } from 'immutable-object-update';

const state = {
    a: {
        a1: 1,
        a2: 2
    },
    b: {
        b1: 3,
        b2: 4
    }
};

const setA1to10 = set('a.a1', 10);
const setB1to30 = set('b.b1', 30);

const updated = apply(state, setA1to10, setB1to30);
```

As a result we will receive new object with structure below:

```js
{
    a: {
        a1: 10,
        a2: 2
    },
    b: {
        b1: 30,
        b2: 5
    }
}
```

`apply()` can also apply a list of operations with the same result:

```js
const updated = apply(state, [ setA1to10, setB1to30 ]);
```

And even many of those:

```js
const updated = apply(state, [ setA1to10, setB1to30 ], [ setCto50 ]);
```