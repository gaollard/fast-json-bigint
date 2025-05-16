import {describe, expect, test} from '@jest/globals';
import { parse } from '../lib'

const data1 = `{"v1":1e-24,"v2":123000000000000000,"v3":1.234e21}`
const data2 = `{"v1":1e-24,"v2":"123000000000000000","v3":"1.234e21"}`

// const a = 1.2345678901234568e21;
// const b = 1234567890123456789012;
// const c = 1.2345678901234568e+21;

describe('sum module', () => {
  test('test 03', () => {
    expect(JSON.stringify(parse(data1))).toBe(data2);
  });
});