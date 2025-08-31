import {describe, it, expect} from 'vitest';
import { replaceNBSP } from '../../src/remarklint/remarkTextrPlugins';

describe('remark-textr-plugins', () => {
    it('should replace non-breaking spaces with regular spaces', () => {
        const input = 'Hello world'; // The space here is a non-breaking space (U+00A0)
        const expected = 'Hello world';
        expect(replaceNBSP(input)).toBe(expected);
    });
});
