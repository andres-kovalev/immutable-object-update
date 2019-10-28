const { identity, application, flatMap } = require('../common');

module.exports = apply;

/**
 * Applies several operations to provided object
 * @param {Object | any[]} object object to updates
 * @param  {...function} ops ops to apply
 * @returns {Object | any[]} updated object
 * @description `apply()` function can help to apply several operations at once:
 * @docs
 * ```js
 * import { apply, set } from 'immutable-object-update';
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
 * const setA1to10 = set('a.a1', 10);
 * const setB1to30 = set('b.b1', 30);
 *
 * const updated = apply(state, setA1to10, setB1to30);
 * ```
 *
 * As a result we will receive new object with structure below:
 *
 * ```js
 * {
 *     a: {
 *         a1: 10,
 *         a2: 2
 *     },
 *     b: {
 *         b1: 30,
 *         b2: 5
 *     }
 * }
 * ```
 *
 * `apply()` can also apply a list of operations with the same result:
 *
 * ```js
 * const updated = apply(state, [ setA1to10, setB1to30 ]);
 * ```
 *
 * And even many of those:
 *
 * ```js
 * const updated = apply(state, [ setA1to10, setB1to30 ], [ setCto50 ]);
 * ```
 */
function apply(object, ...ops) {
    return flatMap(ops, identity)
        .reduce(application, object);
}
