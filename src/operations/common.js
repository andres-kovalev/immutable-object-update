module.exports = {
    update,
    isNumber,
    extractSubPath,
    updateArray
};

function update(object, path, map, shouldCreateIntermediate) {
    return doUpdate(object, path, 0, map, shouldCreateIntermediate);
}

function doUpdate(object, path, index, map, shouldCreateIntermediate) {
    if (index === path.length) {
        return map(object);
    }

    const key = path[index];

    if (!key) {
        return doUpdate(object, path, index + 1, map, shouldCreateIntermediate);
    }

    if (!object && !shouldCreateIntermediate) {
        return object;
    }

    const source = object || createSource(key);
    const item = source[key];
    const newItem = doUpdate(item, path, index + 1, map, shouldCreateIntermediate);

    if (item === newItem) {
        return source;
    }

    return setValue(source, key, newItem);
}

function createSource(key) {
    return isNumber(key) ? [] : {};
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
                source.slice(+key + 1)
            );
    }

    return Object.assign(source.slice(), {
        [key]: value
    });
}

function isNumber(value) {
    return !Number.isNaN(+value);
}

function extractSubPath(path) {
    return [
        path.slice(0, -1),
        path[path.length - 1]
    ];
}

function updateArray(object, path, map) {
    return update(object, path, item => (Array.isArray(item)
        ? map(item)
        : item));
}
