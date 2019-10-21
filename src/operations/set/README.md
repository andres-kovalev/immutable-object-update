# set(object, path, value)

`set()` function consumes 3 arguments:

- object to update
- path to be updated (array of items or dot-separated string can be provided)
- value to set in specified path

```js
import { set } from 'immutable-object-update';

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

const updated = set(state, [ 'b', 'b1' ], 5);

// or

const updated = set(state, 'b.b1', 5);
```

As a result we will receive new object with structure below:

```js
{
    a: {
        a1: 1,
        a2: 2
    },
    b: {
        b1: 3,
        b2: 5
    }
}
```
