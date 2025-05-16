import {describe, expect, test} from '@jest/globals';
import { parse } from '../lib'

const data = ({
  girlFriend: null,
});

describe('null test', () => {
  test('parse object null should be null', () => {
    expect(JSON.parse(null as any)).toBe(parse(null as any));
  });

  test('parse string null should be null', () => {
    expect(JSON.parse('null')).toBe(parse('null'));
  });

  test('parse null in json string', () => {
    const val = parse(JSON.stringify(data));
    expect(val.girlFriend).toBe(data.girlFriend);
  });
});