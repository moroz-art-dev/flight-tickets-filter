import {TicketState} from './ticketsTypes';

export const ticketsInitialState: TicketState = {
  tickets: [],
  filteredTickets: [],
  loading: false,
  error: null,
};
