<a name="map"></a>

## map(object, path, transform) ⇒ <code>Object</code> \| <code>Array.&lt;any&gt;</code>
one of additional functions to work with array items

**Returns**: <code>Object</code> \| <code>Array.&lt;any&gt;</code> - updated object
**Params**

- object <code>Object</code> | <code>Array.&lt;any&gt;</code> - object to update
- path <code>string</code> | <code>Array.&lt;string&gt;</code> - path to be updated
- transform <code>function</code> - transform function



**Description**

```js
import { map } from 'immutable-object-update';

const state = {
    a: {
        b: [ 1, 2, 3 ]
    }
};
const add2 = item => item + 2;

const updated = filter(state, [ 'a', 'b' ], add2);

// or

const updated = filter(state, 'a.b', add2);
```

As a result we will receive new object with structure below:

```js
{
    a: {
        b: [ 3, 4, 5 ]
    }
}
```