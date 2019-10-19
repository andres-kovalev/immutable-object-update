# set(object, path, value)

`set()` function consumes 3 arguments:

- object to update
- path to be updated (array of items or dot-separated string can be provided)
- value to set in specified path

```js
import set from 'immutable-object-update';

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

New object will keep the same refs when necessary:

```js
state === updated // false
state.a === updated.a // true (structure of a hasn't changed)
state.a.a1 === updated.a.a1 // true
state.a.a2 === updated.a.a2 // true
state.b === updated.b // false
state.b.b1 === updated.b.b1 // true
state.b.b2 === updated.b.b2 // false
```

When using string as 2nd argument - dot will be considered as a delimiter (e.g. `a.b` means field `b` of field `a`). So, it's not possible to update keys which contains dots with string type path:

```js
const updated = set({
    'a.b': 1,
    a: {
        b: 2
    }
}, 'a.b', 3);

/*
{
    'a.b': 1,
    a: {
        b: 3
    }
}
*/
```

If you need to update such keys, use array type path instead:

```js
const updated = set({
    'a.b': 1,
    a: {
        b: 2
    }
}, [ 'a.b' ], 3);

/*
{
    'a.b': 3,
    a: {
        b: 2
    }
}
*/
```

`set()` also ignores empty path (e.g. `a..b` equal to `a.b`) and will create intermediate fields by itself when needed:

```js
const updated = set({}, 'a.b', 10);

/*
{
    a: {
        b: 10
    }
}
*/
```

It can even create new objects when no source object provided:

```js
const updated = set(undefined, 'a.b', 10);

/*
{
    a: {
        b: 10
    }
}
*/
```

`set()` tries to predict type of created object. For instance, when path contains number, array will be created:

```js
const updated = set({}, 'a.0', 1);

/*
{
    a: [ 1 ]
}
*/
```
