

module.exports = {
    env:{
        node:true,
        browser:true,
        es6:true,
    },
    extends: 'eslint:recommended',
    parser: 'babel-eslint',
    rules: {
        'for-direction': 'off',
        'no-cond-assign': 'off',
        'no-constant-condition': 'off',
        'no-debugger': 'off',
        'no-regex-spaces': 'off',
        'no-unused-vars': 'off',
    }
}