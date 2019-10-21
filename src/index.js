const update = require('./update');
const set = require('./set');
const remove = require('./remove');

module.exports = {
    ...mapValues({ update, set, remove }, enhance)
};

function mapValues(object, map) {
    return Object.entries(object)
        .reduce(
            (reduced, [ key, value ]) => Object.assign(reduced, {
                [key]: map(value)
            }), {}
        );
}

function enhance(fn) {
    return specialCurry(
        (...args) => preparePath(fn)(...args),
        fn.length
    );
}

function preparePath(fn) {
    return (object, path, ...rest) => fn(
        object,
        Array.isArray(path) ? path : path.split('.'),
        ...rest
    );
}

function specialCurry(fn, arity = fn.length) {
    return (...args) => {
        if (args.length >= arity) {
            return fn(...args);
        }

        return specialCurry(
            (object, ...rest) => fn(object, ...args, ...rest),
            arity - args.length
        );
    };
}
