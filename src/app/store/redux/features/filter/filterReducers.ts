import {PayloadAction} from '@reduxjs/toolkit';

import {FilterState} from './filterTypes';

const setFilter = (state: FilterState, action: PayloadAction<string>) => {
  if (state.selectedFilters.includes(action.payload)) {
    state.selectedFilters = state.selectedFilters.filter(
      filter => filter !== action.payload
    );
  } else {
    state.selectedFilters.push(action.payload);
  }
};

const clearFilter = (state: FilterState) => {
  state.selectedFilters = [];
};

export const filterReducers = {
  setFilter,
  clearFilter,
};
