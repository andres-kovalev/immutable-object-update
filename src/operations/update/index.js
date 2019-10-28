const { update: doUpdate } = require('../common');

module.exports = update;

function update(object, path, map) {
    return doUpdate(object, path, map, true);
}
