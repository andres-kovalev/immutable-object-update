const unshiftAll = require('../unshiftAll');

module.exports = unshift;

/**
 * Adds an element to the beginning of array-item selected by path
 * @param {Object | any[]} object object to update
 * @param {string | string[]} path path to be updated
 * @param {*} value value to be added
 * @returns {Object | any[]} updated object
 * @description one of additional functions to work with array items
 * @docs
 * ```js
 * import { unshift } from 'immutable-object-update';
 *
 * const state = {
 *     a: {
 *         b: [ 1 ]
 *     }
 * };
 *
 * const updated = unshift(state, [ 'a', 'b' ], 0);
 *
 * // or
 *
 * const updated = unshift(state, 'a.b', 0);
 * ```
 *
 * As a result we will receive new object with structure below:
 *
 * ```js
 * {
 *     a: {
 *         b: [ 0, 1 ]
 *     }
 * }
 * ```
 */
function unshift(object, path, value) {
    return unshiftAll(object, path, [ value ]);
}
