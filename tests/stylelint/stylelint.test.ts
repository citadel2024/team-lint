import {describe, it, expect} from 'vitest';
import stylelint from 'stylelint';
import path from 'path';
import config from '../../src/stylelint';

describe('stylelint-config', () => {
    it('should error on invalid less', async () => {
        const {extends: _extends, ...restConfig} = config;
        (restConfig as any).rules = {};
        const result = await stylelint.lint({
            config: restConfig,
            files: path.join(__dirname, 'fixtures/invalid.less'),
        });

        expect(result.errored).toBe(true);
        const warnings = result.results[0].warnings;
        expect(warnings).toHaveLength(1);
        expect(warnings[0].rule).toBe('color-no-invalid-hex');
    });
});
