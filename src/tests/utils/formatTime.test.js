import { describe, expect, test } from '@jest/globals';
import formatTime from '../../common/utils/formatTime';

describe('Format Time Util', () => {
  test('it should format time from Unix timestamp to string', () => {
    const newTime = formatTime(1523647508250);

    expect(newTime).toEqual('Apr 13, 2018 19:25 PM');
  });

  test('it should return Invalid Date if given bad date', () => {
    const newTime = formatTime(null);

    expect(newTime).toEqual('Invalid Date');
  });
});
