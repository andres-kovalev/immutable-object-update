<a name="pushAll"></a>

## pushAll(object, path, values) ⇒ <code>Object</code> \| <code>Array.&lt;any&gt;</code>
one of additional functions to work with array items

**Returns**: <code>Object</code> \| <code>Array.&lt;any&gt;</code> - updated object
**Params**

- object <code>Object</code> | <code>Array.&lt;any&gt;</code> - object to update
- path <code>string</code> | <code>Array.&lt;string&gt;</code> - path to be updated
- values <code>Array.&lt;any&gt;</code> - values to be added



**Description**

```js
import { pushAll } from 'immutable-object-update';

const state = {
    a: {
        b: [ 1 ]
    }
};

const updated = pushAll(state, [ 'a', 'b' ], [ 2, 3, 4 ]);

// or

const updated = pushAll(state, 'a.b', [ 2, 3, 4 ]);
```

As a result we will receive new object with structure below:

```js
{
    a: {
        b: [ 1, 2, 3, 4 ]
    }
}
```