import React from 'react';
import { Link } from 'react-router-dom';
import formatTime from '../../common/utils/formatTime';
import earthQuakeData from '../../data/earthquakes.json';
import useSortableData from '../hooks/useSortableData';
import './EarthQuakeList.css';

export default function EarthQuakeList() {
  // Called custom memoized hook for sorting
  const { items, requestSort, sortConfig } = useSortableData(earthQuakeData.data.features);

  const getClassNamesFor = (name) => {
    if (sortConfig && sortConfig.key === name) {
      // This class gets added to show if the carat is up or down
      return sortConfig.direction === 'ascending' ? 'ascending' : 'descending';
    }
    // Return nothing for the cart by default
    return '';
  };

  return (
    <div className="container">
      <h1>USGS All Earthquakes, Past Hour</h1>
      <table className="earthquake-list">
        <thead>
          <tr>
            <th onClick={() => requestSort('place')} className={getClassNamesFor('place')}>Title</th>
            <th onClick={() => requestSort('mag')} className={getClassNamesFor('mag')}>Magnitude</th>
            <th onClick={() => requestSort('time')} className={getClassNamesFor('time')}>Time</th>
          </tr>
        </thead>
        <tbody>
        {items.map((earthquake) => {
          return (
            <tr key={earthquake.id}>
              <td data-label="Title" className="primary">
                <Link to={`/earthquakes/${earthquake.id}`}>
                  {earthquake.properties.place}</Link>
              </td>
              <td data-label="Magnitude">{earthquake.properties.mag}</td>
              <td data-label="Time">{formatTime(earthquake.properties.time)}</td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  );
}
