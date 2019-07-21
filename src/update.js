module.exports = (object, path, value) => {
    const pathArray = Array.isArray(path)
        ? path
        : path.split('.');

    return update(object, pathArray, value, 0);
};

function update(object, path, value, index) {
    if (index === path.length) {
        return value === object
            ? object
            : value;
    }

    const item = path[index];
    if (isEmpty(item)) {
        return update(object, path, value, index + 1);
    }

    const intItem = parseInt(item, 0);
    const isNumber = !Number.isNaN(intItem);
    const key = isNumber ? intItem : item;

    // eslint-disable-next-line no-nested-ternary
    const target = object === undefined
        ? (isNumber ? [] : {})
        : object;
    const oldValue = target[key];
    const newValue = update(oldValue, path, value, index + 1);

    if (oldValue === newValue) {
        return target;
    }

    if (isNumber && Array.isArray(target)) {
        return target
            .slice(0, key - 1)
            .concat([ newValue ])
            .concat(
                target.slice(key + 1)
            );
    }

    return { ...target, [key]: newValue };
}

function isEmpty(value) {
    return !value && value !== 0;
}
