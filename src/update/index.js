module.exports = update;

function update(object, path, map) {
    const pathArray = Array.isArray(path)
        ? path
        : path.split('.');

    return doUpdate(object, pathArray, 0, map);
}

function doUpdate(object, path, index, map) {
    if (index === path.length) {
        return map(object);
    }

    const key = path[index];

    if (!key) {
        return doUpdate(object, path, index + 1, map);
    }

    const source = object || createSource(key);
    const item = source[key];
    const newItem = doUpdate(item, path, index + 1, map);

    if (item === newItem) {
        return source;
    }

    return setValue(source, key, newItem);
}

function createSource(key) {
    return isNumber(key) ? [] : {};
}

function isNumber(value) {
    return !Number.isNaN(+value);
}

function setValue(source, key, value) {
    if (!Array.isArray(source)) {
        return Object.assign({}, source, {
            [key]: value
        });
    }

    if (isNumber(key)) {
        return source
            .slice(0, key)
            .concat(
                [ value ],
                source.slice(key + 1)
            );
    }

    return Object.assign(source.slice(), {
        [key]: value
    });
}
