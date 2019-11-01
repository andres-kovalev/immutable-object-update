const shiftN = require('../shiftN');

module.exports = shift;

/**
 * Removes an element from the beginning of array-item selected by path
 * @param {Object | any[]} object object to update
 * @param {string | string[]} path path to be updated
 * @returns {Object | any[]} updated object
 * @description one of additional functions to work with array items
 * @docs
 * ```js
 * import { shift } from 'immutable-object-update';
 *
 * const state = {
 *     a: {
 *         b: [ 1, 2, 3 ]
 *     }
 * };
 *
 * const updated = shift(state, [ 'a', 'b' ]);
 *
 * // or
 *
 * const updated = shift(state, 'a.b');
 * ```
 *
 * As a result we will receive new object with structure below:
 *
 * ```js
 * {
 *     a: {
 *         b: [ 2, 3 ]
 *     }
 * }
 * ```
 *
 * > Please note: `shift()` function won't return removed item
 */
function shift(object, path) {
    return shiftN(object, path, 1);
}
