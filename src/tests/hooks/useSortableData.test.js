import { describe, expect, test } from '@jest/globals';
import { renderHook, act } from '@testing-library/react-hooks';
import useSortableData from '../../earthquakes/hooks/useSortableData';
import earthQuakeData from '../../data/earthquakes.json';

describe('Test useSortableData hook', () => {
  test('it sorts mag field by ascending order first for mag and then descending', () => {
    const { result } = renderHook(() => useSortableData(earthQuakeData.data.features));

    act(() => {
      result.current.requestSort('mag');
    });

    expect(result.current.items[0].properties.mag).toEqual(0.54);

    act(() => {
      result.current.requestSort('mag');
    });
    expect(result.current.items[0].properties.mag).toEqual(5.3);
  });

  test('it sorts place field by ascending order first for mag and then descending', () => {
    const { result } = renderHook(() => useSortableData(earthQuakeData.data.features));

    act(() => {
      result.current.requestSort('place');
    });

    expect(result.current.items[0].properties.place).toEqual('10km NE of Aguanga, CA');

    act(() => {
      result.current.requestSort('place');
    });
    expect(result.current.items[0].properties.place).toEqual('65km W of Anchor Point, Alaska');
  });

  test('it sorts time field by ascending order first for mag and then descending', () => {
    const { result } = renderHook(() => useSortableData(earthQuakeData.data.features));

    act(() => {
      result.current.requestSort('time');
    });

    expect(result.current.items[0].properties.time).toEqual(1523644756560);

    act(() => {
      result.current.requestSort('time');
    });
    expect(result.current.items[0].properties.time).toEqual(1523647508250);
  });
});
