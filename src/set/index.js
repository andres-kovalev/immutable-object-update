const update = require('../update');

module.exports = set;

function set(object, path, value) {
    return update(object, path, () => value);
}
