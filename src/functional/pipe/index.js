const { application } = require('../common');

module.exports = (...updates) => object => updates.reduce(application, object);
