const insertAll = require('../insertAll');

module.exports = insert;

/**
 * Inserts an element to the specified position of array-item selected by path
 * @param {Object | any[]} object object to update
 * @param {string | string[]} path path to be updated
 * @param {any} value value to be inserted
 * @returns {Object | any[]} updated object
 * @description one of additional functions to work with array items
 * @docs
 * ```js
 * import { insert } from 'immutable-object-update';
 *
 * const state = {
 *     a: {
 *         b: [ 1, 2 ]
 *     }
 * };
 *
 * const updated = insert(state, [ 'a', 'b', 1 ], 3);
 *
 * // or
 *
 * const updated = insert(state, 'a.b.1', 3);
 * ```
 *
 * As a result we will receive new object with structure below:
 *
 * ```js
 * {
 *     a: {
 *         b: [ 1, 3, 2 ]
 *     }
 * }
 * ```
 */
function insert(object, path, value) {
    return insertAll(object, path, [ value ]);
}
