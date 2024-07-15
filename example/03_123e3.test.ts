import {describe, expect, test} from '@jest/globals';
import { parse } from '../lib'

const data = `{"v1":1e-24,"v2":123000000000000000,"v3":1.234e21}`

// const a = 1.2345678901234568e21;
// const b = 1234567890123456789012;
// const c = 1.2345678901234568e+21;

console.log(JSON.parse(data))
console.log(parse(data))

describe('sum module', () => {
  test('test 03', () => {

    expect(3).toBe(3);
    // expect(JSON.stringify(parse(data))).toBe(val);
  });
});