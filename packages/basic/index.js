module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true
  },
  extends: [
    'plugin:eslint-comments/recommended',
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:yml/standard'
  ],
  plugins: [
    'html',
    'unicorn'
  ],
  overrides: [
    {
      // eslint json 文件
      files: ['*.json', '*.json5'],
      parser: 'jsonc-eslint-parser',
      rules: {
        quotes: ['error', 'double'],
        'quote-props': ['error', 'always'],
        'comma-dangle': ['error', 'never']
      }
    },
    {
      // eslint yaml 文件
      files: ['*.yaml', '*.yml'],
      parser: 'yaml-eslint-parser'
    },
    {
      // 对 package.json key 排序进行规范
      files: ['package.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^$',
            order: [
              'name',
              'version',
              'description',
              'keywords',
              'license',
              'repository',
              'funding',
              'author',
              'type',
              'files',
              'exports',
              'main',
              'module',
              'unpkg',
              'bin',
              'scripts',
              'husky',
              'lint-staged',
              'peerDependencies',
              'peerDependenciesMeta',
              'dependencies',
              'devDependencies',
              'eslintConfig'
            ]
          },
          {
            pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
            order: { type: 'asc' }
          }
        ]
      }
    },
    {
      files: ['*.d.ts'],
      rules: {
        'import/no-duplicates': 'off'
      }
    },
    {
      files: ['scripts/**/*.*'],
      rules: {
        'no-console': 'off'
      }
    }
  ],
  rules: {
    /**
       * 代码风格
       */
    // 指定数组的元素之间要以空格隔开(, 后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格
    'array-bracket-spacing': [2, 'never'],
    // 禁止或强制在单行代码块中使用空格(禁用)
    'block-spacing': [1, 'never'],
    // 强制使用一致的缩进 第二个参数为 "tab" 时，会使用tab，
    // if while function 后面的{必须与if在同一行，java风格。
    'brace-style': [2, '1tbs', { allowSingleLine: true }],
    // 控制逗号前后的空格
    'comma-spacing': [2, { before: false, after: true }],
    // 控制逗号在行尾出现还是在行首出现 (默认行尾)
    'comma-style': [2, 'last'],
    // 以方括号取对象属性时，[ 后面和 ] 前面是否需要空格, 可选参数 never, always
    'computed-property-spacing': [2, 'never'],
    // e.g [0,"that"] 指定只能 var that = this. that不能指向其他任何值，this也不能赋值给that以外的其他值
    'consistent-this': [1, 'that'],
    'eol-last': 2,
    // 强制使用一致的换行风格
    'linebreak-style': [1, 'unix'],
    quotes: [1, 'single'], // 引号类型 `` "" ''
    // 箭头函数体周围需要大括号
    'arrow-body-style': ['error', 'always'],
    // 末尾加分号
    semi: ['error', 'always'],
    /**
       * 开发规范
       */
    // 不允许与 -0 进行比较
    'no-compare-neg-zero': 'error',
    // 禁止条件表达式中的赋值运算符
    'no-cond-assign': 'error',
    // 禁止重新分配 const 变量
    'no-const-assign': 'error',
    // 不允许 debugger 语句
    'no-debugger': 'error',
    // 不允许直接在对象实例上调用某些 Object.prototype 方法
    'no-prototype-builtins': 'error',
    // 在定义的范围内强制使用变量
    'block-scoped-var': 'error',
    // 强制执行程序中允许的最大圈复杂度
    // complexity: ['error', 6],
    // 尽可能使用点符号
    'dot-notation': ['error', { allowKeywords: false }],
    // 要求使用 === 和 !==
    eqeqeq: ['error', 'allow-null'],
    // 强制执行最小和最大标识符长度
    'id-length': ['error', { min: 1 }],
    // 强制执行块可以嵌套的最大深度
    'max-depth': ['error', 4],
    // 要求构造函数名称以大写字母开头
    'new-cap': 'error',
    // 禁止使用 alert、confirm 和 prompt
    'no-alert': 'error',
    // 禁止使用 console
    'no-console': 1,
    // 不允许删除变量
    'no-delete-var': 'error',
    // 禁止 if 语句中的 return 语句之后的 else 块
    'no-else-return': 'error',
    // 不允许空块语句
    'no-empty': 'error',
    // 不允许空函数
    'no-empty-function': 'error',
    // 禁止在没有类型检查运算符的情况下进行 null 比较
    'no-eq-null': 'error',
    // 禁止嵌套的三元表达式
    'no-nested-ternary': 'error',
    // 不允许将变量初始化为 undefined
    'no-undef-init': 'error',
    // 需要 let 或 const 而不是 var
    'no-var': 'error',
    // 禁止 void 运算符
    'no-void': 'error',
    // 禁止 with 语句
    'no-with': 'error',
    // 声明后永远不会重新分配的变量需要 const 声明
    'prefer-const': 'error',
    // 禁止数字字面量中使用前导和末尾小数点
    'no-floating-decimal': 'error',
    // 禁止使用多行字符串，在 JavaScript 中，可以在新行之前使用斜线创建多行字符串
    'no-multi-str': 'error',
    // 禁止使用 javascript: url
    'no-script-url': 0,
    // 禁止在注释中使用特定的警告术语
    'no-warning-comments': 0
  }
};
