import {describe, expect, test} from '@jest/globals';
import { parse } from '../lib'

const data = ({
  name: 'frank',
  leader: undefined,
})

describe('undefined test', () => {
  test('parse undefined', () => {
    expect(() => parse(undefined as any)).toThrow(SyntaxError)
  });
  test('parse undefined in json string', () => {
    expect(parse(JSON.stringify(data)).leader).toBe(undefined);
  });
});