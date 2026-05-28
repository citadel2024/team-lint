export default {
    $schema: 'https://json.schemastore.org/commitlintrc',
    extends: ['@commitlint/config-conventional'],
    rules: {
        // Keep body/footer formatting as warnings instead of hard errors.
        'body-leading-blank': [1, 'always'],

        'footer-leading-blank': [1, 'always'],

        // Limit the header line length. 72 can be too strict, so 100 is a practical default.
        'header-max-length': [2, 'always', 100],

        // Scope must be lowercase when provided.
        // Example: feat(reader): add bookmark support
        'scope-case': [2, 'always', 'lower-case'],

        'subject-empty': [2, 'never'],

        // Subject must not end with a period.
        'subject-full-stop': [2, 'never', '.'],

        // Type must be lowercase, for example: feat / fix, not FEAT / Fix.
        'type-case': [2, 'always', 'lower-case'],

        // Type and subject must not be empty.
        'type-empty': [2, 'never'],

        // Commit type must be one of the following values.
        'type-enum': [
            2,
            'always',
            [
                'feat',
                'fix',
                'docs',
                'style',
                'refactor',
                'perf',
                'test',
                'build',
                'ci',
                'chore',
                'revert',
            ],
        ],
    },
};
