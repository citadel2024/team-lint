import {describe, it, expect} from 'vitest';
import { createConfig } from '../../src/semantic-release/createConfig';

describe('semantic-release-config', () => {
    it('should create a default config', () => {
        const config = createConfig();
        expect(config.branches).toBeDefined();
        expect(config.plugins).toBeDefined();
        // Default has 5 plugins: release-notes-generator, changelog, npm, github, git
        const pluginNames = (config.plugins || []).map(p => Array.isArray(p) ? p[0] : p);
        expect(pluginNames).toContain('@semantic-release/release-notes-generator');
        expect(pluginNames).toContain('@semantic-release/changelog');
        expect(pluginNames).toContain('@semantic-release/npm');
        expect(pluginNames).toContain('@semantic-release/github');
        expect(pluginNames).toContain('@semantic-release/git');
    });

    it('should disable github and npm plugins', () => {
        const config = createConfig({ enableGithub: false, enableNPM: false });
        const pluginNames = (config.plugins || []).map(p => Array.isArray(p) ? p[0] : p);
        expect(pluginNames).not.toContain('@semantic-release/npm');
        expect(pluginNames).not.toContain('@semantic-release/github');
        expect(pluginNames).toHaveLength(3);
    });

    it('should enable github and npm plugins by default', () => {
        const config = createConfig({ enableGithub: true, enableNPM: true });
        const pluginNames = (config.plugins || []).map(p => Array.isArray(p) ? p[0] : p);
        expect(pluginNames).toContain('@semantic-release/npm');
        expect(pluginNames).toContain('@semantic-release/github');
        expect(pluginNames).toHaveLength(5);
    });
});
