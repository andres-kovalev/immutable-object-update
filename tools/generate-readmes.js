const jsdoc2md = require('jsdoc-to-markdown'); // eslint-disable-line import/no-extraneous-dependencies
const { writeFile } = require('./common');

jsdoc2md.getTemplateDataSync({ files: './src/*/*/index.js' })
    .forEach(generateReadme);

function generateReadme(meta) {
    const file = getMarkdownFileName(meta);
    const markdown = generateReadmeMarkdown(meta);

    const normalizedMarkdown = markdown
        .split('\n')
        .map(
            line => line.trimRight()
        )
        .join('\n');

    writeFile(file, normalizedMarkdown);
}

function generateReadmeMarkdown(meta) {
    const { scope, customTags, ...data } = meta;

    const markdown = jsdoc2md.renderSync({
        data: [ data ],
        'param-list-format': 'list'
    });

    if (customTags) {
        const { value } = customTags.find(
            ({ tag }) => tag === 'docs'
        ) || {};

        return [ markdown, '**Description**', value ].join('\n\n');
    }

    return markdown;
}

function getMarkdownFileName({ meta }) {
    const { filename, path } = meta;
    const [ name ] = filename.split('.');
    const mdName = name === 'index' ? 'README' : name;

    return `${ path }/${ mdName }.md`;
}
