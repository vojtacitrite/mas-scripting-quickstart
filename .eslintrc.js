module.exports = {
    env: {
        es2021: true,
    },
    extends: ['standard', 'eslint:recommended', 'prettier'],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    overrides: [
        {
            files: ['**/*.spec.js', 'test/**'],
            env: {mocha: true},
            rules: {
                'import/no-extraneous-dependencies': ['off'],
            },
        },
    ],
    globals: {
        integration: 'readonly',
        library: 'readonly',
    },
    rules: {
        'no-unused-vars': ['warn', {args: 'after-used', ignoreRestSiblings: false}],
    },
}
