import {describe, expect, test} from '@jest/globals';
import { parse } from '../lib'

const data = JSON.stringify({
  name: 'frank',
  v1: 20.5,
  v2: -20.5,
  v3: 20,
  v4: -20
})

describe('sum module', () => {
  test('test 02_float', () => {
    expect(JSON.stringify(parse(data))).toBe(data);
  });
});