import {describe, it, expect} from 'vitest';
import config from '../../src/commitlint';

describe('commitlint-config', () => {
    it('should export a config object', () => {
        expect(typeof config).toBe('object');
        expect(config).not.toBeNull();
        expect(Array.isArray(config.extends)).toBe(true);
    });
});
