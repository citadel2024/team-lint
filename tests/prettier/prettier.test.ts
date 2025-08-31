import {describe, it, expect} from 'vitest';
import config from '../../src/prettier';

describe('prettier-config', () => {
    it('should export a config object', () => {
        expect(typeof config).toBe('object');
        expect(config).not.toBeNull();
        expect(config.singleQuote).toBe(true);
    });
});
