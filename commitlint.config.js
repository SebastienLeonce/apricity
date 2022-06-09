const { readdirSync: readDirectory } = require('fs');
const DEFAULT_SCOPES = ['repo'];

const packageDirNames = readDirectory('./packages', { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((dir) => dir.name);

const scopes = DEFAULT_SCOPES.concat(packageDirNames);

module.exports = {
    extends: ['@pskfyi/commitlint-config'],
    rules: {
        'scope-enum': [2, 'always', scopes],
    },
};
