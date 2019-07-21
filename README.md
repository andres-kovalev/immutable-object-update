[![ci](https://img.shields.io/circleci/build/github/andres-kovalev/immutable-object-update.svg?style=flat-square&logo=circleci)](https://circleci.com/gh/andres-kovalev/immutable-object-update)
[![codecov](https://img.shields.io/codecov/c/github/andres-kovalev/immutable-object-update.svg?style=flat-square&logo=codecov&token=1280f2cf41a24522add9857967be2a73)](https://codecov.io/gh/andres-kovalev/immutable-object-update)
[![downloads](https://img.shields.io/npm/dm/immutable-object-update.svg?style=flat-square&logo=data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDAwcHgiIGhlaWdodD0iNDAwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiCj48ZyBmaWxsPSJ3aGl0ZSI+PHBhdGggZD0iTTM3OSwxODAuNWgtMTAydi0xMDBoLTE1M3YxMDBoLTEwMmwxNzguNSwxNzguNWwxNzguNSwtMTc4LDUiLz48L2c+PC9zdmc+Cg==)](https://www.npmjs.com/package/immutable-object-update)
[![node](https://img.shields.io/node/v/immutable-object-update.svg?style=flat-square&logo=node.js&color=007ec6)](https://nodejs.org/)
[![npm](https://img.shields.io/npm/v/immutable-object-update.svg?style=flat-square&logo=npm)](https://www.npmjs.com/package/immutable-object-update)
[![MIT](https://img.shields.io/npm/l/immutable-object-update.svg?color=007ec6&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAA5ElEQVR4AY3SJWyDcRQE8G+MsnIg63XNmMm2ZuB9xjyv5tWYfAZ2TD6tGW9qzHCX3H9bX4rJz7y7K3t8NK20OT7ogHnYl3ndfK5nRwFYgxf4Nl6UBVzfjcoholIiEXbdsBS2TCERdks5HIaPVIfqDnN4HCO8gUm5iZEfc/gYI+gBT3pi5I8M3szxE0LgSYg303ljcGqOtAHFshEjP+VwOkbwCvXyGiOf5rASrkwQhhIJm4zdKg4zYBDe/z8j72Te0bu6GRxSIUzAHXxBF3jSpdudOoX2/5oDQVgEP3ji1y3Ijhv9ABp7euvVsybrAAAAAElFTkSuQmCC&style=flat-square)](https://github.com/andres-kovalev/immutable-object-update/blob/master/LICENSE)
[![npm bundle size](https://img.shields.io/bundlephobia/min/immutable-object-update.svg?style=flat-square&logo=data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDAwcHgiIGhlaWdodD0iNDAwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnIGZpbGw9IndoaXRlIj48cGF0aCBkPSJNNzUsMzBoMTc1bDEwMCwxMDB2MjQwaC0yNzV2LTI0MCIvPjwvZz48ZyBmaWxsPSIjREREIj48cGF0aCBkPSJNMjUwLDMwbDEwMCwxMDBoLTEwMHYtMTAwIi8+PC9nPjwvc3ZnPgo=)](https://www.npmjs.com/package/immutable-object-update)

# immutable-object-update

Simple and fast immutable update utility.

# Description

`immutable-object-update` provides simple utility for immutable object update (pretty helpful for reducers).

# Installation

As any other npm package `immutable-object-update` can be added to your project by following command:

```bash
npm i -S immutable-object-update
```

# API

## update(object, path, value)

`update()` function consumes 3 arguments:

- object to update
- path to be updated (array of items or dot-separated string can be provided)
- value to set in specified path

```js
import update from 'immutable-object-update';

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

const updated = update(state, [ 'b', 'b1' ], 5);

// or

const updated = update(state, 'b.b1', 5);
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
const updated = update({
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
const updated = update({
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

`update()` also ignores empty path (e.g. `a..b` equal to `a.b`) and will create intermediate fields by itself when needed:

```js
const updated = update({}, 'a.b', 10);

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
const updated = update(undefined, 'a.b', 10);

/*
{
    a: {
        b: 10
    }
}
*/
```

`update()` tries to predict type of created object. For instance, when path contains number, array will be created:

```js
const updated = update({}, 'a.0', 1);

/*
{
    a: [ 1 ]
}
*/
```
