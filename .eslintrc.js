module.exports = {
    parser: 'vue-eslint-parser',
    plugins: ['gridsome'],
    rules: {
        'gridsome/format-query-block': 'error',
        'gridsome/use-env-prefix': 'error',
        'gridsome/require-g-image-src': 'error',
        'gridsome/require-g-link-to': 'warn'
    },
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module'
    }
}