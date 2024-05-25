const { FlatCompat } = require('@eslint/eslintrc');
const vueConfig = require('eslint-config-vue-fxt');

const compat = new FlatCompat({
  baseDirectory: __dirname // 确保此路径正确
});

module.exports = [
  ...compat.config(vueConfig)
];
