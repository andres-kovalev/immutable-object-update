<a name="popN"></a>

## popN(object, path, n) ⇒ <code>Object</code> \| <code>Array.&lt;any&gt;</code>
one of additional functions to work with array items

**Returns**: <code>Object</code> \| <code>Array.&lt;any&gt;</code> - updated object
**Params**

- object <code>Object</code> | <code>Array.&lt;any&gt;</code> - object to update
- path <code>string</code> | <code>Array.&lt;string&gt;</code> - path to be updated
- n <code>number</code> - number of elements to remove



**Description**

```js
import { popN } from 'immutable-object-update';

const state = {
    a: {
        b: [ 1, 2, 3 ]
    }
};

const updated = popN(state, [ 'a', 'b' ], 2);

// or

const updated = popN(state, 'a.b', 2);
```

As a result we will receive new object with structure below:

```js
{
    a: {
        b: [ 1 ]
    }
}
```

> Please note: `popN()` function won't return removed items