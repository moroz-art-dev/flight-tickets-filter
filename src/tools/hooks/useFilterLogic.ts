import {
  setFilter,
  clearFilter,
  removeFilter,
} from '@app/store/redux/features/filter/filterSlice';
import {applyFiltersAndSort} from '@app/store/redux/features/tickets/ticketsThunks';
import {useAppDispatch, useAppSelector} from '@app/store/redux/hooks';
import _ from 'lodash';
import {useCallback, useEffect, useMemo} from 'react';

export const useFilterLogic = () => {
  const dispatch = useAppDispatch();
  const selectedFilter = useAppSelector(state => state.filter.selectedFilters);

  const handleFilterChange = useCallback(
    (filterId: string) => {
      if (filterId === 'all') {
        dispatch(clearFilter());
        dispatch(setFilter(filterId));
      } else {
        dispatch(removeFilter('all'));
        dispatch(setFilter(filterId));
      }
    },
    [dispatch]
  );

  const debouncedApplyFiltersAndSort = useMemo(
    () => _.debounce(() => dispatch(applyFiltersAndSort()), 300),
    [dispatch]
  );

  useEffect(() => {
    debouncedApplyFiltersAndSort();
    return () => debouncedApplyFiltersAndSort.cancel();
  }, [selectedFilter, debouncedApplyFiltersAndSort]);

  return {
    selectedFilter,
    handleFilterChange,
  };
};
