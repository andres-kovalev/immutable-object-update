const update = require('../update');

module.exports = set;

/**
 * Sets value for item selected by path
 * @param {Object | any[]} object object to update
 * @param {string | string[]} path path to be updated
 * (array of items or dot-separated string can be provided)
 * @param {*} value value to set in specified path
 * @returns {Object | any[]} updated object
 * @docs
 * ```js
 * import { set } from 'immutable-object-update';
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
 * const updated = set(state, [ 'b', 'b1' ], 5);
 *
 * // or
 *
 * const updated = set(state, 'b.b1', 5);
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
 *         b1: 3,
 *         b2: 5
 *     }
 * }
 * ```
*/
function set(object, path, value) {
    return update(object, path, () => value);
}
