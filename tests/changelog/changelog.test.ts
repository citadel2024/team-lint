import {describe, it, expect} from 'vitest';
import config from '../../src/changelog';

describe('changelog-config', () => {
    it('should export a config object', () => {
        expect(typeof config).toBe('object');
        expect(config).not.toBeNull();
        expect(config.addBackToTop).toBe(true);
    });
});
