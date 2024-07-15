import {PayloadAction} from '@reduxjs/toolkit';

import {Ticket, TicketState} from './ticketsTypes';

const setFilteredTickets = (
  state: TicketState,
  action: PayloadAction<Ticket[]>
) => {
  state.filteredTickets = action.payload;
};

const setTickets = (state: TicketState, action: PayloadAction<Ticket[]>) => {
  state.tickets = action.payload;
  state.filteredTickets = action.payload;
};

export const ticketsReducers = {
  setFilteredTickets,
  setTickets,
};
