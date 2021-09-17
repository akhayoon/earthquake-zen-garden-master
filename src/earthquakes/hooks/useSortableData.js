import React, { useState } from 'react';

export default function useSortableData(items, config = null) {
  const [sortConfig, setSortConfig] = useState(config);

  // This is called everytime, so it needs to be memoized or else we risk too many renders
  // and performance degradation
  const sortedItems = React.useMemo(() => {
    // Avoid mutation by copying the array first
    const sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a.properties[sortConfig.key] < b.properties[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a.properties[sortConfig.key] > b.properties[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
}
