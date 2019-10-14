module.exports = set;

function set(object, path, value) {
    const pathArray = Array.isArray(path)
        ? path
        : path.split('.');

    return doSet(object, pathArray, 0, value);
}

function doSet(object, path, index, value) {
    if (index === path.length) {
        return value;
    }

    const key = path[index];

    if (!key) {
        return doSet(object, path, index + 1, value);
    }

    const source = object || createSource(key);
    const item = source[key];
    const newItem = doSet(item, path, index + 1, value);

    if (item === newItem) {
        return source;
    }

    if (!Array.isArray(source)) {
        return Object.assign({}, source, {
            [key]: newItem
        });
    }

    if (isNumber(key)) {
        return source
            .slice(0, key)
            .concat(
                [ newItem ],
                source.slice(key + 1)
            );
    }

    return Object.assign(source.slice(), {
        [key]: newItem
    });
}

function createSource(key) {
    return isNumber(key) ? [] : {};
}

function isNumber(value) {
    return value.toString() === parseInt(value, 0).toString();
}
