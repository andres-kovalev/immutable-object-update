module.exports = {
    isNumber,
    extractSubPath
};

function isNumber(value) {
    return !Number.isNaN(+value);
}

function extractSubPath(path) {
    return [
        path.slice(0, -1),
        path[path.length - 1]
    ];
}
