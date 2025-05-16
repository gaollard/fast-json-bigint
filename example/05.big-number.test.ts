import {describe, expect, test} from '@jest/globals';
import { parse } from '../lib'

const data1 = `{"v5":${Number.MAX_SAFE_INTEGER}}`
const data2 = `{"v5":"${Number.MAX_SAFE_INTEGER}1"}`
const data3 = `{"v5":${Number.MAX_SAFE_INTEGER}1}`

describe('big number', () => {
  test(`MAX_SAFE_INTEGER`, () => {
    expect(JSON.stringify(parse(data1))).toStrictEqual(data1)
    expect(JSON.stringify(parse(data2))).toStrictEqual(data2)
  });

  test(`great than MAX_SAFE_INTEGER`, () => {
    expect(parse(data3).v5).toStrictEqual(`${Number.MAX_SAFE_INTEGER}1`)
  });
});