const popN = require('../popN');

module.exports = pop;

/**
 * Removes an element from the end of array-item selected by path
 * @param {Object | any[]} object object to update
 * @param {string | string[]} path path to be updated
 * @returns {Object | any[]} updated object
 * @description one of additional functions to work with array items
 * @docs
 * ```js
 * import { pop } from 'immutable-object-update';
 *
 * const state = {
 *     a: {
 *         b: [ 1, 2, 3 ]
 *     }
 * };
 *
 * const updated = pop(state, [ 'a', 'b' ]);
 *
 * // or
 *
 * const updated = pop(state, 'a.b');
 * ```
 *
 * As a result we will receive new object with structure below:
 *
 * ```js
 * {
 *     a: {
 *         b: [ 1, 2 ]
 *     }
 * }
 * ```
 *
 * > Please note: `pop()` function won't return removed item
 */
function pop(object, path) {
    return popN(object, path, 1);
}
