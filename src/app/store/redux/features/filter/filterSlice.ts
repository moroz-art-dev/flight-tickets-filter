import {createSlice} from '@reduxjs/toolkit';

import {filterInitialState} from './filterInitialState';
import {filterReducers} from './filterReducers';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: filterReducers,
});

export const {setFilter, clearFilter} = filterSlice.actions;
export default filterSlice.reducer;
