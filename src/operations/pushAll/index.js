const { updateArray } = require('../common');

module.exports = pushAll;

/**
 * Adds number of elements to the end of array-item selected by path
 * @param {Object | any[]} object object to update
 * @param {string | string[]} path path to be updated
 * @param {any[]} values values to be added
 * @returns {Object | any[]} updated object
 * @description one of additional functions to work with array items
 * @docs
 * ```js
 * import { pushAll } from 'immutable-object-update';
 *
 * const state = {
 *     a: {
 *         b: [ 1 ]
 *     }
 * };
 *
 * const updated = pushAll(state, [ 'a', 'b' ], [ 2, 3, 4 ]);
 *
 * // or
 *
 * const updated = pushAll(state, 'a.b', [ 2, 3, 4 ]);
 * ```
 *
 * As a result we will receive new object with structure below:
 *
 * ```js
 * {
 *     a: {
 *         b: [ 1, 2, 3, 4 ]
 *     }
 * }
 * ```
 */
function pushAll(object, path, values) {
    return updateArray(
        object,
        path,
        array => array.concat(values)
    );
}
