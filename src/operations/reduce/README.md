<a name="reduce"></a>

## reduce(object, path, reducer) ⇒ <code>Object</code> \| <code>Array.&lt;any&gt;</code>
one of additional functions to work with array items

**Returns**: <code>Object</code> \| <code>Array.&lt;any&gt;</code> - updated object
**Params**

- object <code>Object</code> | <code>Array.&lt;any&gt;</code> - object to update
- path <code>string</code> | <code>Array.&lt;string&gt;</code> - path to be updated
- reducer <code>function</code> - reducer function



**Description**

```js
import { reduce } from 'immutable-object-update';

const state = {
    a: {
        b: [ 1, 2, 3, 4, 5 ]
    }
};
const sum = (acc, item) => acc + item;

const updated = reduce(state, [ 'a', 'b' ], sum);

// or

const updated = reduce(state, 'a.b', sum);
```

As a result we will receive new object with structure below:

```js
{
    a: {
        b: 15
    }
}
```

> Please note: first element of array will be always used as initial value