import {describe, expect, test} from '@jest/globals';
import { parse } from '../lib'

// const a = 1.2345678901234568e21;
// const b = 1234567890123456789012;
// const c = 1.2345678901234568e+21;

describe('aEb', () => {
  test('positive small numbers', () => {
    const data1 = `{"v1":1.23e7}`; // 等同于 12300000
    const data2 = {"v1": 12300000};
    expect(parse(data1).v1).toBe(data2.v1);
  });

  test('positive large numbers', () => {
    const data1 = `{"v1":1.2e16}`; // 等同于 12000000000000000
    const data2 = {"v1": "12000000000000000.0"};
    console.log(parse(data1).v1);
    expect(JSON.stringify(parse(data1))).toBe(JSON.stringify(data2));
  });
});