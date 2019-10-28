const jsdoc2md = require('jsdoc-to-markdown'); // eslint-disable-line import/no-extraneous-dependencies
const { writeFile } = require('./common');

jsdoc2md.getTemplateDataSync({ files: './src/*/*/index.js' })
    .forEach(generateReadme);

function generateReadme(meta) {
    const { filename, path } = meta.meta;
    const [ name ] = filename.split('.');
    const mdName = name === 'index' ? 'README' : name;

    const { scope, customTags, ...data } = meta;

    let md = jsdoc2md.renderSync({
        data: [ data ],
        'param-list-format': 'list'
    });

    if (customTags) {
        const { value } = customTags.find(
            ({ tag }) => tag === 'docs'
        ) || {};

        md = [ md, '**Description**', value ].join('\n\n');
    }

    writeFile(`${ path }/${ mdName }.md`, md);
}
