const { updateArray } = require('../common');

module.exports = map;

/**
 * Transforms elements of array-item selected by path using provided transform function
 * @param {Object | any[]} object object to update
 * @param {string | string[]} path path to be updated
 * @param {function} transform transform function
 * @returns {Object | any[]} updated object
 * @description one of additional functions to work with array items
 * @docs
 * ```js
 * import { map } from 'immutable-object-update';
 *
 * const state = {
 *     a: {
 *         b: [ 1, 2, 3 ]
 *     }
 * };
 * const add2 = item => item + 2;
 *
 * const updated = filter(state, [ 'a', 'b' ], add2);
 *
 * // or
 *
 * const updated = filter(state, 'a.b', add2);
 * ```
 *
 * As a result we will receive new object with structure below:
 *
 * ```js
 * {
 *     a: {
 *         b: [ 3, 4, 5 ]
 *     }
 * }
 * ```
 */
function map(object, path, transform) {
    return updateArray(object, path, array => array.map(transform));
}
