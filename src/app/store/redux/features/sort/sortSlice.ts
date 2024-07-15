import {createSlice} from '@reduxjs/toolkit';

import {sortInitialState} from './sortInitialState';
import {sortReducers} from './sortReducers';

const sortSlice = createSlice({
  name: 'sort',
  initialState: sortInitialState,
  reducers: sortReducers,
});

export const {setSort} = sortSlice.actions;
export default sortSlice.reducer;
