const { readFileSync } = require('fs');
const json2md = require('jsdoc-to-markdown'); // eslint-disable-line import/no-extraneous-dependencies
const handlebars = require('handlebars'); // eslint-disable-line import/no-extraneous-dependencies

const groupNameRegExp = /^--(\w*)$/;

const [ templateFile, ...args ] = process.argv.slice(2);

const data = args.reduce(
    (reduced, item, index) => {
        const [ , field ] = item.match(groupNameRegExp) || [];
        const next = args[index + 1];

        if (field && next && !groupNameRegExp.test(next)) {
            return {
                ...reduced,
                [field]: getFunctions(next)
            };
        }

        return reduced;
    }, {}
);

const template = readFileSync(templateFile, 'utf8');
const compiled = handlebars.compile(template);

console.log(compiled(data)); // eslint-disable-line no-console

function getFunctions(files) {
    return json2md.getTemplateDataSync({ files })
        .map(addFullName);
}

function addFullName(meta) {
    const { name, params } = meta;

    return {
        name,
        params,
        fn: `${ name }(${
            params.map(extractName).join(', ')
        })`,
        ...meta
    };
}

function extractName({ name }) {
    return name;
}
