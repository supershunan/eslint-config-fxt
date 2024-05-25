module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    '@fxt/eslint-config-ts'
  ],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      },
      rules: {
        'no-unused-vars': 'off',
        'no-undef': 'off',
        '@typescript-eslint/no-unused-vars': 'off'
      }
    }
  ],
  rules: {
    'vue/max-attributes-per-line': ['warn', { singleline: 5 }],
    'vue/html-self-closing': 'off',
    'vue/no-v-html': 'off',
    'vue/require-prop-types': 'off',
    'vue/require-default-prop': 'off',
    // 关闭组件名称检查
    'vue/multi-word-component-names': 'off',
    // 设置 vue 文件内的标签顺序
    'vue/component-tags-order': [
      'error',
      { order: ['template', 'script', 'style'] }
    ]
  }
};
