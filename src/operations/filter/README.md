<a name="filter"></a>

## filter(object, path, predicate) ⇒ <code>Object</code> \| <code>Array.&lt;any&gt;</code>
one of additional functions to work with array items

**Returns**: <code>Object</code> \| <code>Array.&lt;any&gt;</code> - updated object
**Params**

- object <code>Object</code> | <code>Array.&lt;any&gt;</code> - object to update
- path <code>string</code> | <code>Array.&lt;string&gt;</code> - path to be updated
- predicate <code>function</code> - filter predicate



**Description**

```js
import { filter } from 'immutable-object-update';

const state = {
    a: {
        b: [ 1, 2, 3, 4, 5 ]
    }
};
const isOdd = item => item % 2;

const updated = filter(state, [ 'a', 'b' ], isOdd);

// or

const updated = filter(state, 'a.b', isOdd);
```

As a result we will receive new object with structure below:

```js
{
    a: {
        b: [ 1, 3, 5 ]
    }
}
```