const { readdirSync, statSync, rmdirSync, unlinkSync } = require('fs');

const [ sourceDir, targetDir ] = process.argv.slice(2);

cleanUpDir(targetDir, sourceDir);

function cleanUpDir(targetItem, sourceItem) {
    const targetItems = readdirSync(targetItem);
    const sourceItems = readdirSync(sourceItem);

    const isAllRemoved = targetItems.reduce(
        (result, item) => checkItem(targetItem, sourceItem, item, sourceItems) && result,
        true
    );

    if (isAllRemoved) {
        rmdirSync(targetItem, { recursive: true });
    }

    return isAllRemoved;
}

function checkItem(target, source, item, sourceItems) {
    const targetPath = `${ target }/${ item }`;
    if (sourceItems.indexOf(item) !== -1) {
        if (statSync(targetPath).isDirectory()) {
            return cleanUpDir(
                targetPath,
                `${ source }/${ item }`
            );
        }

        return unlinkSync(targetPath) || true;
    }

    return false;
}
