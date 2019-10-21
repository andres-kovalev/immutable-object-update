const { identity, application, flatMap } = require('../common');

module.exports = (object, ...updates) => flatMap(updates, identity)
    .reduce(application, object);
