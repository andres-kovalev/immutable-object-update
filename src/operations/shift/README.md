<a name="shift"></a>

## shift(object, path) ⇒ <code>Object</code> \| <code>Array.&lt;any&gt;</code>
one of additional functions to work with array items

**Returns**: <code>Object</code> \| <code>Array.&lt;any&gt;</code> - updated object
**Params**

- object <code>Object</code> | <code>Array.&lt;any&gt;</code> - object to update
- path <code>string</code> | <code>Array.&lt;string&gt;</code> - path to be updated



**Description**

```js
import { shift } from 'immutable-object-update';

const state = {
    a: {
        b: [ 1, 2, 3 ]
    }
};

const updated = shift(state, [ 'a', 'b' ]);

// or

const updated = shift(state, 'a.b');
```

As a result we will receive new object with structure below:

```js
{
    a: {
        b: [ 2, 3 ]
    }
}
```

> Please note: `shift()` function won't return removed item