import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, test } from '@jest/globals';
import renderer from 'react-test-renderer';
import EarthQuakeList from '../../earthquakes/components/EarthQuakeList';

describe('Test EarthQuakeList Component', () => {
  test('it should match Snapshot', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <EarthQuakeList />
        </MemoryRouter>
        ,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
