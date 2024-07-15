import {PayloadAction} from '@reduxjs/toolkit';

import {loadTickets, applyFiltersAndSort} from './ticketsThunks';
import {Ticket} from './ticketsTypes';

const ticketsExtraReducers = (builder: any) => {
  builder
    .addCase(loadTickets.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(
      loadTickets.fulfilled,
      (state: any, action: PayloadAction<Ticket[]>) => {
        state.loading = false;
        state.tickets = action.payload;
        state.filteredTickets = action.payload;
      }
    )
    .addCase(
      loadTickets.rejected,
      (state: any, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = action.payload || 'Failed to load tickets';
      }
    )
    .addCase(
      applyFiltersAndSort.fulfilled,
      (state: any, action: PayloadAction<Ticket[]>) => {
        state.filteredTickets = action.payload;
      }
    );
};

export default ticketsExtraReducers;
