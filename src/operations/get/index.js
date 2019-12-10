module.exports = get;

function get(object, path) {
    let result = object;

    for (let i = 0; result !== undefined && i < path.length; i++) {
        result = result[path[i]];
    }

    return result;
}
