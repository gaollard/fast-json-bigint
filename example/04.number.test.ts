import {describe, expect, test} from '@jest/globals';
import { parse } from '../lib'

const data = ({
  name: 'frank',
  v1: 20.5,
  v2: -20.5,
  v3: 20.0,
  v4: -20.0,
  v5: 20.123123
})

describe('number', () => {
  test('test number', () => {
    expect(parse(20.5 as unknown as string)).toBe(20.5);
    expect(parse(-20.5 as unknown as string)).toBe(-20.5);
    expect(parse(20.0 as unknown as string)).toBe(20.0);
    expect(parse(20.000 as unknown as string)).toBe(20.000);
    expect(parse(20.123123 as unknown as string)).toBe(20.123123);
  });

  test('test number in json', () => {
    const target = parse(JSON.stringify(data));
    expect(target).toStrictEqual(data);
  });
});