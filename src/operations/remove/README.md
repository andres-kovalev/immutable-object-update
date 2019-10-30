<a name="remove"></a>

## remove(object, path) ⇒ <code>Object</code> \| <code>Array.&lt;any&gt;</code>
[set()](../set/README.md) and [update()](../update/README.md) operations can help
with new values, but it requires to many steps to remove items. Here `remove()` operation comes.

**Returns**: <code>Object</code> \| <code>Array.&lt;any&gt;</code> - updated object
**Params**

- object <code>Object</code> | <code>Array.&lt;any&gt;</code> - object to update
- path <code>string</code> | <code>Array.&lt;string&gt;</code> - path to item to be removed
(array of items or dot-separated string can be provided)



**Description**

```js
import { remove } from 'immutable-object-update';

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

const updated = remove(state, [ 'b', 'b1' ]);

// or

const updated = remove(state, 'b.b1');
```

As a result we will receive new object with structure below:

```js
{
    a: {
        a1: 1,
        a2: 2
    },
    b: {
        b2: 5
    }
}
```

> Please note: `remove()` function won't return removed item