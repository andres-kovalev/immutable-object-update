const { updateArray } = require('../common');

module.exports = unshiftAll;

/**
 * Adds number of elements to the beginning of array-item selected by path
 * @param {Object | any[]} object object to update
 * @param {string | string[]} path path to be updated
 * @param {any[]} values values to be added
 * @returns {Object | any[]} updated object
 * @description one of additional functions to work with array items
 * @docs
 * ```js
 * import { unshiftAll } from 'immutable-object-update';
 *
 * const state = {
 *     a: {
 *         b: [ 1 ]
 *     }
 * };
 *
 * const updated = unshiftAll(state, [ 'a', 'b' ], [ 2, 3, 4 ]);
 *
 * // or
 *
 * const updated = unshiftAll(state, 'a.b', [ 2, 3, 4 ]);
 * ```
 *
 * As a result we will receive new object with structure below:
 *
 * ```js
 * {
 *     a: {
 *         b: [ 2, 3, 4, 1 ]
 *     }
 * }
 * ```
 *
 * > Please note: items will be added all at once, so the original order will be saved
 */
function unshiftAll(object, path, values) {
    return updateArray(
        object,
        path,
        array => values.concat(array)
    );
}
