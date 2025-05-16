import {describe, expect, test} from '@jest/globals';
import { parse } from '../lib'

describe('empty', () => {
  test('empty string', () => {
    expect(parse('""')).toBe(JSON.parse('""'));
  });
  test('empty {}', () => {
    expect(parse('{}')).toStrictEqual({});
  });
    test('empty []', () => {
    expect(parse('[]')).toStrictEqual([]);
  });
});