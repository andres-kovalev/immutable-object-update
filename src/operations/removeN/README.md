<a name="removeN"></a>

## removeN(object, path, n) ⇒ <code>Object</code> \| <code>Array.&lt;any&gt;</code>
one of additional functions to work with array items

**Returns**: <code>Object</code> \| <code>Array.&lt;any&gt;</code> - updated object
**Params**

- object <code>Object</code> | <code>Array.&lt;any&gt;</code> - object to update
- path <code>string</code> | <code>Array.&lt;string&gt;</code> - path to first item to be removed
(array of items or dot-separated string can be provided)
- n <code>number</code> - number of items to remove



**Description**

```js
import { removeN } from 'immutable-object-update';

const state = {
    a: {
        b: [ 1, 2, 3, 4, 5, 6 ]
    },
};

const updated = removeN(state, [ 'a', 'b', 1 ], 3);

// or

const updated = removeN(state, 'b.b1.1', 3);
```

As a result we will receive new object with structure below:

```js
{
    a: {
        b: [ 1, 5, 6 ]
    }
}
```

> Please note: `removeN()` function won't return removed items