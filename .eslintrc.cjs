module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: '@jahia',
    overrides: [
        {
            env: {
                node: true
            },
            files: [
                '.eslintrc.{js,cjs}'
            ],
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    ignorePatterns: ['dist', '*.min.js', 'javascript'],
    rules: {
        camelcase: ['error', {allow: ['page_home']}]
    }
};
