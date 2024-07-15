import FilterList from '@components/features/filter/FilterList';
import filterConfig from '@config/filterConfig';
import {useFilterLogic} from '@tools/hooks/useFilterLogic';
import React, {useMemo} from 'react';

const FilterContainer: React.FC = () => {
  const {selectedFilter, handleFilterChange} = useFilterLogic();

  const memoizedFilterConfig = useMemo(
    () => ({
      title: filterConfig.title,
      options: filterConfig.options,
    }),
    []
  );

  return (
    <FilterList
      title={memoizedFilterConfig.title}
      options={memoizedFilterConfig.options}
      selectedFilter={selectedFilter}
      onFilterChange={handleFilterChange}
    />
  );
};

export default FilterContainer;
