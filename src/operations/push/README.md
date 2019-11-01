<a name="push"></a>

## push(object, path, value) ⇒ <code>Object</code> \| <code>Array.&lt;any&gt;</code>
one of additional functions to work with array items

**Returns**: <code>Object</code> \| <code>Array.&lt;any&gt;</code> - updated object
**Params**

- object <code>Object</code> | <code>Array.&lt;any&gt;</code> - object to update
- path <code>string</code> | <code>Array.&lt;string&gt;</code> - path to be updated
- value <code>\*</code> - value to be added



**Description**

```js
import { push } from 'immutable-object-update';

const state = {
    a: {
        b: [ 1 ]
    }
};

const updated = push(state, [ 'a', 'b' ], 2);

// or

const updated = push(state, 'a.b', 2);
```

As a result we will receive new object with structure below:

```js
{
    a: {
        b: [ 1, 2 ]
    }
}
```