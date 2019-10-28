const { update: doUpdate } = require('../common');

module.exports = update;

/**
 * Updates value for item
 * @param {Object | any[]} object object to update
 * @param {string | string[]} path path to be updated
 * (array of items or dot-separated string can be provided)
 * @param {function} update function to update value
 * @returns {Object | any[]} updated object
 * @description Sometimes we need to set new value depends on previous value.
 * Here `update()` operation can help.
 * @docs
 * ```js
 * import { update } from 'immutable-object-update';
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
 * const increment = oldValue => oldValue + 1;
 * const updated = update(state, [ 'b', 'b1' ], increment);
 *
 * // or
 *
 * const updated = update(state, 'b.b1', increment);
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
 *         b1: 4,
 *         b2: 5
 *     }
 * }
 * ```
*/
function update(object, path, map) {
    return doUpdate(object, path, map, true);
}
