const { updateArray } = require('../common');

module.exports = shiftN;

/**
 * Removes number of elements from the beginning of array-item selected by path
 * @param {Object | any[]} object object to update
 * @param {string | string[]} path path to be updated
 * @param {number} n number of elements to remove
 * @returns {Object | any[]} updated object
 * @description one of additional functions to work with array items
 * @docs
 * ```js
 * import { shiftN } from 'immutable-object-update';
 *
 * const state = {
 *     a: {
 *         b: [ 1, 2, 3 ]
 *     }
 * };
 *
 * const updated = shiftN(state, [ 'a', 'b' ], 2);
 *
 * // or
 *
 * const updated = shiftN(state, 'a.b', 2);
 * ```
 *
 * As a result we will receive new object with structure below:
 *
 * ```js
 * {
 *     a: {
 *         b: [ 3 ]
 *     }
 * }
 * ```
 *
 * > Please note: `shiftN()` function won't return removed items
 */
function shiftN(object, path, n) {
    return updateArray(object, path, array => array.slice(n));
}
