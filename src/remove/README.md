# remove(object, path)

[set()](../set/README.md) and [update()](../update/README.md) functions can help with new values, but it requires to many steps to remove items. Here `remove()` operation comes.

`remove()` function consumes 3 arguments:

- object to update
- path of item to be removed (array of items or dot-separated string can be provided)

```js
import { remove } from 'immutable-object-update';

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

const updated = remove(state, [ 'b', 'b1' ]);

// or

const updated = remove(state, 'b.b1');
```

As a result we will receive new object with structure below:

```js
{
    a: {
        a1: 1,
        a2: 2
    },
    b: {
        b2: 5
    }
}
```
