

// Examples of "real" configs:
// https://github.com/renke/import-sort/blob/master/packages/import-sort-style-renke/src/index.ts
// https://github.com/renke/import-sort/blob/master/packages/import-sort-style-module/src/index.ts

module.exports = function() {
    return [
        {
            match: ({ moduleName }) => moduleName === 'first',
        },
        { separator: true },
        {
            match: ({ moduleName }) => moduleName.startsWith('../') && !moduleName.startsWith('../../'),
        },
        { separator: true },
        {
            match: ({ moduleName }) => moduleName.startsWith('../../'),
        },
        { separator: true },
        {
            match: ({ moduleName }) => moduleName.startsWith('packages'),
        },
        { separator: true },
    ];
};
