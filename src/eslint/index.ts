import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginSortKeysFix from 'eslint-plugin-sort-keys-fix';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import eslintPluginUnusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const compat = new FlatCompat({
    baseDirectory: import.meta.url,
});

export default [
    js.configs.recommended,
    ...compat.extends(
        'plugin:import/typescript',
        'plugin:import/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/recommended',
    ),
    ...tseslint.configs.recommended,
    // Disable rules conflict with prettier.
    eslintConfigPrettier,
    {
        // Note: there should be no other properties in this object
        ignores: [
            // # dependencies
            'node_modules',
            // # ci
            '.coverage',
            // # test
            'jest*',
            '_test_',
            '__test__',
            // # production
            'dist/**',
            'es',
            'lib',
            'logs',
        ],
    },
    {
        languageOptions: {
            ecmaVersion: 2022,
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            sourceType: 'module',
        },
    },
    {
        plugins: {
            'react-hooks': eslintPluginReactHooks,
            'sort-keys-fix': eslintPluginSortKeysFix,
            'unicorn': eslintPluginUnicorn,
            'unused-imports': eslintPluginUnusedImports,
        },
        rules: {
            '@typescript-eslint/ban-ts-comment': 0,
            '@typescript-eslint/no-explicit-any': 0,
            'import/first': 'error',
            'import/newline-after-import': 'error',
            'import/no-duplicates': 'error',
            'no-empty': 'warn',
            'no-extra-boolean-cast': 'warn',
            'no-unused-vars': 0,
            'react-hooks/exhaustive-deps': 'warn',
            'react-hooks/rules-of-hooks': 'error',
            'react/display-name': 0,
            'react/jsx-no-useless-fragment': 'error',
            'react/jsx-sort-props': 'error',
            'react/prop-types': 0,
            'react/react-in-jsx-scope': 0,
            'sort-keys-fix/sort-keys-fix': 'error',
            'unicorn/explicit-length-check': 'warn',
            'unicorn/filename-case': 0,
            'unicorn/import-style': 0,
            'unicorn/no-anonymous-default-export': 0,
            'unicorn/no-array-for-each': 'warn',
            'unicorn/no-array-reduce': 0,
            'unicorn/no-empty-file': 'warn',
            'unicorn/no-negated-condition': 'warn',
            'unicorn/no-nested-ternary': 0,
            'unicorn/no-null': 'warn',
            'unicorn/no-typeof-undefined': 'warn',
            'unicorn/no-useless-undefined': 'warn',
            'unicorn/prefer-code-point': 'warn',
            'unicorn/prefer-logical-operator-over-ternary': 0,
            'unicorn/prefer-module': 0,
            'unicorn/prefer-spread': 'warn',
            'unicorn/prefer-string-replace-all': 'warn',
            'unicorn/prefer-type-error': 'warn',
            'unicorn/prevent-abbreviations': 0,
            'unicorn/switch-case-braces': 'warn',
            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-vars': [
                'warn',
                {
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                    vars: 'all',
                    varsIgnorePattern: '^_',
                },
            ],
        },
    },
    {
        settings: {
            'import/resolver': {
                node: {
                    extensions: ['.js', '.jsx', '.ts', '.tsx'],
                },
                typescript: {
                    alwaysTryTypes: true,
                },
            },
        },
    },
];
