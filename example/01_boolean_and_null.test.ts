import {describe, expect, test} from '@jest/globals';
import { parse } from '../lib'

const data = JSON.stringify({
  name: 'frank',
  leader: false,
  girlFriend: null,
  poor: true
})

describe('sum module', () => {
  test('test 01_boolean_and_null', () => {
    expect(JSON.stringify(parse(data))).toBe(data);
  });
});