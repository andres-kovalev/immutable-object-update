<a name="get"></a>

## get(object, path) ⇒ <code>any</code>
Gets value from an object by path

**Returns**: <code>any</code> - found value
**Params**

- object <code>Object</code> | <code>Array.&lt;any&gt;</code> - object to update
- path <code>string</code> | <code>Array.&lt;string&gt;</code> - path to be updated
(array of items or dot-separated string can be provided)



**Description**

`get()` is more like helper, not an operation since it doesn't perform any update,
just returns value found by path.
```js
import { get } from 'immutable-object-update';

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

const value = get(state, [ 'b', 'b1' ]); // returns 3

// or

const updated = get(state, 'b.b1', 5); // returns 3
```