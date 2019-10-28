<a name="set"></a>

## set(object, path, value) ⇒ <code>Object</code> \| <code>Array.&lt;any&gt;</code>
Sets value for item selected by path

**Returns**: <code>Object</code> \| <code>Array.&lt;any&gt;</code> - updated object  
**Params**

- object <code>Object</code> | <code>Array.&lt;any&gt;</code> - object to update
- path <code>string</code> | <code>Array.&lt;string&gt;</code> - path to be updated(array of items or dot-separated string can be provided)
- value <code>\*</code> - value to set in specified path



**Description**

```jsimport { set } from 'immutable-object-update';const state = {    a: {        a1: 1,        a2: 2    },    b: {        b1: 3,        b2: 4    }};const updated = set(state, [ 'b', 'b1' ], 5);// orconst updated = set(state, 'b.b1', 5);```As a result we will receive new object with structure below:```js{    a: {        a1: 1,        a2: 2    },    b: {        b1: 3,        b2: 5    }}```