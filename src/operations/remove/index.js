const { update, isNumber, extractSubPath } = require('../common');

module.exports = remove;

function remove(object, path) {
    const [ itemPath, valuePath ] = extractSubPath(path);

    return update(object, itemPath, (item) => {
        if (!item) {
            return item;
        }

        if (Array.isArray(item) && isNumber(valuePath)) {
            return item
                .slice(0, valuePath)
                .concat(item.slice(+valuePath + 1));
        }

        const {
            [valuePath]: temp,
            ...newItem
        } = item;

        return newItem;
    }, false);
}
