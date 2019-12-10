module.exports = get;

/**
 * Gets value from an object by path
 * @param {Object | any[]} object object to update
 * @param {string | string[]} path path to be updated
 * (array of items or dot-separated string can be provided)
 * @returns {any} found value
 * @docs
 * `get()` is more like helper, not an operation since it doesn't perform any update,
 * just returns value found by path.
 * ```js
 * import { get } from 'immutable-object-update';
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
 * const value = get(state, [ 'b', 'b1' ]); // returns 3
 *
 * // or
 *
 * const updated = get(state, 'b.b1', 5); // returns 3
 * ```
*/
function get(object, path) {
    let result = object;

    for (let i = 0; result !== undefined && i < path.length; i++) {
        result = result[path[i]];
    }

    return result;
}
