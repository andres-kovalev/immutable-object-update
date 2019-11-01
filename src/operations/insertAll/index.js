const { extractSubPath, isNumber, updateArray } = require('../common');

module.exports = insertAll;

/**
 * Inserts number of elements to the specified position of array-item selected by path
 * @param {Object | any[]} object object to update
 * @param {string | string[]} path path to be updated
 * @param {any[]} values values to be inserted
 * @returns {Object | any[]} updated object
 * @description one of additional functions to work with array items
 * @docs
 * ```js
 * import { insertAll } from 'immutable-object-update';
 *
 * const state = {
 *     a: {
 *         b: [ 1, 2 ]
 *     }
 * };
 *
 * const updated = insertAll(state, [ 'a', 'b', 1 ], [ 3, 4 ]);
 *
 * // or
 *
 * const updated = insertAll(state, 'a.b.1', [ 3, 4 ]);
 * ```
 *
 * As a result we will receive new object with structure below:
 *
 * ```js
 * {
 *     a: {
 *         b: [ 1, 3, 4, 2 ]
 *     }
 * }
 * ```
 */
function insertAll(object, path, values) {
    const [ itemPath, valuePath ] = extractSubPath(path);

    if (!isNumber(valuePath)) {
        return object;
    }

    return updateArray(
        object,
        itemPath,
        array => array
            .slice(0, valuePath)
            .concat(
                values,
                array.slice(valuePath)
            )
    );
}
