const update = require('./update');
const set = require('./set');
const remove = require('./remove');

module.exports = {
    ...mapValues({ update, set, remove }, preparePath)
};

function mapValues(object, map) {
    return Object.entries(object)
        .reduce(
            (reduced, [ key, value ]) => Object.assign(reduced, {
                [key]: map(value)
            }), {}
        );
}

function preparePath(fn) {
    return (object, path, ...rest) => fn(
        object,
        Array.isArray(path) ? path : path.split('.'),
        ...rest
    );
}
