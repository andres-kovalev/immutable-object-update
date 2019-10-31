const { updateArray } = require('../common');

module.exports = filter;

/**
 * Filters elements of array-item selected by path using provided predicate
 * @param {Object | any[]} object object to update
 * @param {string | string[]} path path to be updated
 * @param {function} predicate filter predicate
 * @returns {Object | any[]} updated object
 * @description one of additional functions to work with array items
 * @docs
 * ```js
 * import { filter } from 'immutable-object-update';
 *
 * const state = {
 *     a: {
 *         b: [ 1, 2, 3, 4, 5 ]
 *     }
 * };
 * const isOdd = item => item % 2;
 *
 * const updated = filter(state, [ 'a', 'b' ], isOdd);
 *
 * // or
 *
 * const updated = filter(state, 'a.b', isOdd);
 * ```
 *
 * As a result we will receive new object with structure below:
 *
 * ```js
 * {
 *     a: {
 *         b: [ 1, 3, 5 ]
 *     }
 * }
 * ```
 */
function filter(object, path, predicate) {
    return updateArray(object, path, array => array.filter(predicate));
}
