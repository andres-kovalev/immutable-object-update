<a name="pop"></a>

## pop(object, path) ⇒ <code>Object</code> \| <code>Array.&lt;any&gt;</code>
one of additional functions to work with array items

**Returns**: <code>Object</code> \| <code>Array.&lt;any&gt;</code> - updated object
**Params**

- object <code>Object</code> | <code>Array.&lt;any&gt;</code> - object to update
- path <code>string</code> | <code>Array.&lt;string&gt;</code> - path to be updated



**Description**

```js
import { pop } from 'immutable-object-update';

const state = {
    a: {
        b: [ 1, 2, 3 ]
    }
};

const updated = pop(state, [ 'a', 'b' ]);

// or

const updated = pop(state, 'a.b');
```

As a result we will receive new object with structure below:

```js
{
    a: {
        b: [ 1, 2 ]
    }
}
```

> Please note: `pop()` function won't return removed item