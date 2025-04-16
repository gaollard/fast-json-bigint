import {describe, expect, test} from '@jest/globals';
import { parse } from '../lib'

const data = JSON.stringify({
  name: 'frank',
  v1: 20.5,
  v2: -20.5,
  v3: 20.0,
  v4: -20
})

describe('sum module', () => {
  test('test 02_float', () => {
    const target = JSON.stringify(parse(data));

    console.log('origin', data)
    console.log('target', data)

    expect(target).toBe(data);
  });
});