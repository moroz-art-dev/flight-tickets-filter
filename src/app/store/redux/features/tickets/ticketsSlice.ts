import {createSlice} from '@reduxjs/toolkit';

import ticketsExtraReducers from './ticketsExtraReducers';
import {ticketsInitialState} from './ticketsInitialState';
import {ticketsReducers} from './ticketsReducers';

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: ticketsInitialState,
  reducers: ticketsReducers,
  extraReducers: ticketsExtraReducers,
});

export const {setTickets} = ticketsSlice.actions;
export default ticketsSlice.reducer;
