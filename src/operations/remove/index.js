const { update, isNumber, extractSubPath } = require('../common');

module.exports = remove;

/**
 * Removes item from object
 * @param {Object | any[]} object object to update
 * @param {string | string[]} path path to item to be removed
 * (array of items or dot-separated string can be provided)
 * @returns {Object | any[]} updated object
 * @description [set()](../set/README.md) and [update()](../update/README.md) operations can help
 * with new values, but it requires to many steps to remove items. Here `remove()` operation comes.
 * @docs
 * ```js
 * import { remove } from 'immutable-object-update';
 *
 * const state = {
 *     a: {
 *         a1: 1,
 *         a2: 2
 *     },
 *     b: {
 *         b1: 3,
 *         b2: 4
 *     }
 * };
 *
 * const updated = remove(state, [ 'b', 'b1' ]);
 *
 * // or
 *
 * const updated = remove(state, 'b.b1');
 * ```
 *
 * As a result we will receive new object with structure below:
 *
 * ```js
 * {
 *     a: {
 *         a1: 1,
 *         a2: 2
 *     },
 *     b: {
 *         b2: 5
 *     }
 * }
 * ```
 *
 * > Please note: `remove()` function won't return removed item
 */
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
