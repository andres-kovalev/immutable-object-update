const { updateArray, isNumber, extractSubPath } = require('../common');

module.exports = removeN;

/**
 * Removes number of elements from array-item selected by path
 * @param {Object | any[]} object object to update
 * @param {string | string[]} path path to first item to be removed
 * (array of items or dot-separated string can be provided)
 * @param {number} n number of items to remove
 * @returns {Object | any[]} updated object
 * @description one of additional functions to work with array items
 * @docs
 * ```js
 * import { removeN } from 'immutable-object-update';
 *
 * const state = {
 *     a: {
 *         b: [ 1, 2, 3, 4, 5, 6 ]
 *     },
 * };
 *
 * const updated = removeN(state, [ 'a', 'b', 1 ], 3);
 *
 * // or
 *
 * const updated = removeN(state, 'b.b1.1', 3);
 * ```
 *
 * As a result we will receive new object with structure below:
 *
 * ```js
 * {
 *     a: {
 *         b: [ 1, 5, 6 ]
 *     }
 * }
 * ```
 *
 * > Please note: `removeN()` function won't return removed items
 */
function removeN(object, path, n) {
    const [ itemPath, valuePath ] = extractSubPath(path);

    if (!isNumber(valuePath)) {
        return object;
    }

    return updateArray(
        object,
        itemPath,
        array => array
            .slice(0, valuePath)
            .concat(array.slice(+valuePath + n))
    );
}
