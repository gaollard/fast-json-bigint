import {describe, expect, test} from '@jest/globals';
import { parse } from '../lib'

const data1 = `{"v5":${Number.MAX_SAFE_INTEGER}1}`
const data2 = `{"v5":"${Number.MAX_SAFE_INTEGER}1"}`

describe('sum module', () => {
  test(`test 04_big_number`, () => {
    console.log(' input ', data1)
    console.log('output ', JSON.stringify(parse(data1)))
    expect(JSON.stringify(parse(data1))).toBe(data2);
  });
});