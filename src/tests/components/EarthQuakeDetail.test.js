import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, test } from '@jest/globals';
import renderer from 'react-test-renderer';
import EarthQuakeDetail from '../../earthquakes/components/EarthQuakeDetail';

// Mock react-router-dom in order to insert mock for useParams
// eslint-disable-next-line no-undef
jest.mock('react-router-dom', () => {
  return {
    // eslint-disable-next-line no-undef
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
      id: 'nc72999021',
    }),
  };
});

describe('Test EarthQuakeDetail Component', () => {
  test('it should match Snapshot', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <EarthQuakeDetail />
        </MemoryRouter>
        ,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
