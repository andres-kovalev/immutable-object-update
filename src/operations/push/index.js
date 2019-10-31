const pushAll = require('../pushAll');

module.exports = push;

/**
 * Adds an element to the end of array-item selected by path
 * @param {Object | any[]} object object to update
 * @param {string | string[]} path path to be updated
 * @param {*} value value to be added
 * @returns {Object | any[]} updated object
 * @description one of additional functions to work with array items
 * @docs
 * ```js
 * import { push } from 'immutable-object-update';
 *
 * const state = {
 *     a: {
 *         b: [ 1 ]
 *     }
 * };
 *
 * const updated = push(state, [ 'a', 'b' ], 2);
 *
 * // or
 *
 * const updated = push(state, 'a.b', 2);
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
 */
function push(object, path, value) {
    return pushAll(object, path, [ value ]);
}
