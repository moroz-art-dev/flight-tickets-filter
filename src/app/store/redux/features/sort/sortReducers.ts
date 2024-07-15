import {PayloadAction} from '@reduxjs/toolkit';

import {SortState} from './sortTypes';

const setSort = (state: SortState, action: PayloadAction<string>) => {
  state.activeSort = action.payload;
};

export const sortReducers = {
  setSort,
};
