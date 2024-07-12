import {describe, expect, test} from '@jest/globals';
import { parse } from '../lib'

const data = `{"name":"frank","v1":"123000000000000000","v2":1e-24,"v3":"1.2345678901234568e21"}`

// const a = 1.2345678901234568e21;
// const b = 1234567890123456789012;
// const c = 1.2345678901234568e+21;

describe('sum module', () => {
  test('test 02_float', () => {
    expect(JSON.stringify(parse(data))).toBe(val);
  });
});