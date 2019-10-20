# update(object, path, updater)

Sometimes we need to set new value depends on previous value. Here `update()` operation can help. It consumes 3 arguments:

- object to update
- path to be updated (array of items or dot-separated string can be provided)
- updater - function to update value on specified path

```js
import { update } from 'immutable-object-update';

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

const increment = oldValue => oldValue + 1;
const updated = update(state, [ 'b', 'b1' ], increment);

// or

const updated = update(state, 'b.b1', increment);
```

As a result we will receive new object with structure below:

```js
{
    a: {
        a1: 1,
        a2: 2
    },
    b: {
        b1: 4,
        b2: 5
    }
}
```
