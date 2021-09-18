import React from 'react';
import { describe, expect, test } from '@jest/globals';
import renderer from 'react-test-renderer';
import Profile from '../../profile/Profile';

describe('Test Profile Component', () => {
  test('it should match Snapshot', () => {
    const tree = renderer
      .create(<Profile />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
