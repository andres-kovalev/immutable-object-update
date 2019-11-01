<a name="insert"></a>

## insert(object, path, value) ⇒ <code>Object</code> \| <code>Array.&lt;any&gt;</code>
one of additional functions to work with array items

**Returns**: <code>Object</code> \| <code>Array.&lt;any&gt;</code> - updated object
**Params**

- object <code>Object</code> | <code>Array.&lt;any&gt;</code> - object to update
- path <code>string</code> | <code>Array.&lt;string&gt;</code> - path to be updated
- value <code>any</code> - value to be inserted



**Description**

```js
import { insert } from 'immutable-object-update';

const state = {
    a: {
        b: [ 1, 2 ]
    }
};

const updated = insert(state, [ 'a', 'b', 1 ], 3);

// or

const updated = insert(state, 'a.b.1', 3);
```

As a result we will receive new object with structure below:

```js
{
    a: {
        b: [ 1, 3, 2 ]
    }
}
```