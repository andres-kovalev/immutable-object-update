<a name="insertAll"></a>

## insertAll(object, path, values) ⇒ <code>Object</code> \| <code>Array.&lt;any&gt;</code>
one of additional functions to work with array items

**Returns**: <code>Object</code> \| <code>Array.&lt;any&gt;</code> - updated object
**Params**

- object <code>Object</code> | <code>Array.&lt;any&gt;</code> - object to update
- path <code>string</code> | <code>Array.&lt;string&gt;</code> - path to be updated
- values <code>Array.&lt;any&gt;</code> - values to be inserted



**Description**

```js
import { insertAll } from 'immutable-object-update';

const state = {
    a: {
        b: [ 1, 2 ]
    }
};

const updated = insertAll(state, [ 'a', 'b', 1 ], [ 3, 4 ]);

// or

const updated = insertAll(state, 'a.b.1', [ 3, 4 ]);
```

As a result we will receive new object with structure below:

```js
{
    a: {
        b: [ 1, 3, 4, 2 ]
    }
}
```