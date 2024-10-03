const typescriptPlugin = require('@typescript-eslint/eslint-plugin');
const angularEslintPlugin = require('@angular-eslint/eslint-plugin');
const angularEslintTemplatePlugin = require('@angular-eslint/eslint-plugin-template');
const prettierPlugin = require('eslint-plugin-prettier');
const prettierConfig = require('eslint-config-prettier');
const jsxA11yPlugin = require('eslint-plugin-jsx-a11y');

module.exports = [
  {
    files: ['**/*.ts'],
    ignores: ['projects/**/*'],
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
      parserOptions: {
        project: './tsconfig.json',
        createDefaultProgram: true,
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      '@angular-eslint': angularEslintPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': [
        'error',
        { singleQuote: true, trailingComma: 'all', printWidth: 80 },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          prefix: 'app',
          style: 'kebab-case',
          type: 'element',
        },
      ],
      '@angular-eslint/directive-selector': [
        'error',
        {
          prefix: 'app',
          style: 'camelCase',
          type: 'attribute',
        },
      ],
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-use-before-define': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      'no-console': 'error',
      'spaced-comment': [
        'error',
        'always',
        {
          line: { markers: ['/'] },
        },
      ],
      'no-multiple-empty-lines': 'error',
      'prefer-const': 'error',
      'max-len': ['error', { code: 80, ignoreComments: true }],
      ...prettierConfig.rules,
    },
  },
  {
    files: ['**/*.html'],
    languageOptions: {
      parser: require('@angular-eslint/template-parser'),
    },
    plugins: {
      '@angular-eslint/template': angularEslintTemplatePlugin,
      'prettier': prettierPlugin,
    },
    rules: {
      'prettier/prettier': ['error', { printWidth: 80 }],
      '@angular-eslint/template/eqeqeq': 'error',
      '@angular-eslint/template/no-heading-content': 'off',
    },
  },
  {
    files: ['**/*spec.ts', '**/*mock.ts'],
    rules: {
      'no-undef': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'local',
          args: 'none',
        },
      ],
    },
  },
  {
    files: ['**/*.state.ts'],
    rules: {
      '@typescript-eslint/explicit-member-accessibility': [
        'off',
        { accessibility: 'explicit' },
      ],
      '@typescript-eslint/explicit-function-return-type': [
        'off',
        { accessibility: 'explicit' },
      ],
    },
  },
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx', '**/*.html'],
    plugins: {
      'jsx-a11y': jsxA11yPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      'jsx-a11y/heading-has-content': 'off',
      'jsx-a11y/section-has-heading': 'off',
    },
  },
];
