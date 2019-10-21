const identity = value => value;

const application = (value, map) => map(value);

const flatMap = (array, map) => array.reduce(
    (reduced, item) => reduced.concat(
        (Array.isArray(item) ? item : [ item ]).map(map)
    ), []
);

module.exports = {
    identity,
    application,
    flatMap
};
