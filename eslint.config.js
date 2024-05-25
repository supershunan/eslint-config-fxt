const { FlatCompat } = require('@eslint/eslintrc');
const vueConfig = require('@fxt/eslint-config-vue');

const compat = new FlatCompat({
  baseDirectory: __dirname // 确保此路径正确
});

module.exports = [
  ...compat.config(vueConfig)
];
