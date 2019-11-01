const { updateArray } = require('../common');

module.exports = popN;

/**
 * Removes number of elements from the end of array-item selected by path
 * @param {Object | any[]} object object to update
 * @param {string | string[]} path path to be updated
 * @param {number} n number of elements to remove
 * @returns {Object | any[]} updated object
 * @description one of additional functions to work with array items
 * @docs
 * ```js
 * import { popN } from 'immutable-object-update';
 *
 * const state = {
 *     a: {
 *         b: [ 1, 2, 3 ]
 *     }
 * };
 *
 * const updated = popN(state, [ 'a', 'b' ], 2);
 *
 * // or
 *
 * const updated = popN(state, 'a.b', 2);
 * ```
 *
 * As a result we will receive new object with structure below:
 *
 * ```js
 * {
 *     a: {
 *         b: [ 1 ]
 *     }
 * }
 * ```
 *
 * > Please note: `popN()` function won't return removed items
 */
function popN(object, path, n) {
    return updateArray(object, path, array => array.slice(0, -n));
}
