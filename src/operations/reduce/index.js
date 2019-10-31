const { updateArray } = require('../common');

module.exports = reduce;

/**
 * Reduces array-item selected by path using provided reducer
 * @param {Object | any[]} object object to update
 * @param {string | string[]} path path to be updated
 * @param {function} reducer reducer function
 * @returns {Object | any[]} updated object
 * @description one of additional functions to work with array items
 * @docs
 * ```js
 * import { reduce } from 'immutable-object-update';
 *
 * const state = {
 *     a: {
 *         b: [ 1, 2, 3, 4, 5 ]
 *     }
 * };
 * const sum = (acc, item) => acc + item;
 *
 * const updated = reduce(state, [ 'a', 'b' ], sum);
 *
 * // or
 *
 * const updated = reduce(state, 'a.b', sum);
 * ```
 *
 * As a result we will receive new object with structure below:
 *
 * ```js
 * {
 *     a: {
 *         b: 15
 *     }
 * }
 * ```
 *
 * > Please note: first element of array will be always used as initial value
 */
function reduce(object, path, reducer) {
    return updateArray(
        object,
        path,
        array => array.reduce(
            reducer,
            ...(array.length ? [] : [ undefined ])
        )
    );
}
