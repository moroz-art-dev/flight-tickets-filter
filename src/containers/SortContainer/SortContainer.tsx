import {setSort} from '@app/store/redux/features/sort/sortSlice';
import {applyFiltersAndSort} from '@app/store/redux/features/tickets/ticketsThunks';
import {useAppDispatch, useAppSelector} from '@app/store/redux/hooks';
import SortList from '@components/features/sort/SortList/SortList';
import {debounce} from 'lodash';
import React, {useCallback, useEffect, useMemo} from 'react';

const SortContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const activeSort = useAppSelector(state => state.sort.activeSort);

  const handleSortChange = useCallback(
    (id: string) => {
      dispatch(setSort(id));
    },
    [dispatch]
  );

  const debouncedApplyFiltersAndSort = useMemo(
    () => debounce(() => dispatch(applyFiltersAndSort()), 300),
    [dispatch]
  );

  useEffect(() => {
    debouncedApplyFiltersAndSort();
    return () => debouncedApplyFiltersAndSort.cancel();
  }, [activeSort, debouncedApplyFiltersAndSort]);

  return <SortList activeSort={activeSort} onSortChange={handleSortChange} />;
};

export default React.memo(SortContainer);
