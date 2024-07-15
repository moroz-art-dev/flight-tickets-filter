import {fetchTickets} from '@api/ticketsService';
import type {RootState} from '@app/store/redux/store';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {filterTickets, sortTickets} from '@utils/ticketUtils';

import {Ticket} from './ticketsTypes';

export const loadTickets = createAsyncThunk<
  Ticket[],
  void,
  {rejectValue: string}
>('tickets/loadTickets', async (_, {rejectWithValue}) => {
  try {
    return await fetchTickets();
  } catch (error: any) {
    return rejectWithValue(
      error.message || 'An error occurred while fetching tickets'
    );
  }
});

export const applyFiltersAndSort = createAsyncThunk(
  'tickets/applyFiltersAndSort',
  async (_, {getState}) => {
    const state = getState() as RootState;
    let filteredTickets = [...state.tickets.tickets];

    // Apply filters
    filteredTickets = filterTickets(
      filteredTickets,
      state.filter.selectedFilters
    );

    // Apply sort
    filteredTickets = sortTickets(filteredTickets, state.sort.activeSort);

    return filteredTickets;
  }
);
