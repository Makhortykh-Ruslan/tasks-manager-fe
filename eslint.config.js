const typescriptPlugin = require('@typescript-eslint/eslint-plugin');
const angularEslintPlugin = require('@angular-eslint/eslint-plugin');
const angularEslintTemplatePlugin = require('@angular-eslint/eslint-plugin-template');
const prettierPlugin = require('eslint-plugin-prettier');

module.exports = [
  {
    files: ['**/*.ts'],
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
      'prettier': prettierPlugin,
    },
    rules: {
      'prettier/prettier': ['error'],
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
      'max-len': ['error', { code: 80 }],
    },
  },
  {
    files: ['**/*.html'],
    plugins: {
      '@angular-eslint/template': angularEslintTemplatePlugin,
    },
    rules: {
      'max-len': ['error', { code: 140 }],
      'spaced-comment': 'off',
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
        {
          accessibility: 'explicit',
        },
      ],
      '@typescript-eslint/explicit-function-return-type': [
        'off',
        {
          accessibility: 'explicit',
        },
      ],
    },
  },
];
