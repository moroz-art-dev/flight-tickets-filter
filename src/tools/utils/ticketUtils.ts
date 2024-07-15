import {Ticket, Segment} from '@app/store/redux/features/tickets/ticketsTypes';

export const filterTickets = (tickets: Ticket[], selectedFilters: string[]) => {
  if (selectedFilters.length === 0 || selectedFilters.includes('all')) {
    return tickets;
  }
  return tickets.filter(ticket =>
    ticket.segments.every(segment =>
      selectedFilters.includes(segment.transfers.toString())
    )
  );
};

export const getTotalDuration = (segments: Segment[]) =>
  segments.reduce((total, segment) => total + segment.duration, 0);

export const getTotalTransfers = (segments: Segment[]) =>
  segments.reduce((total, segment) => total + segment.transfers, 0);

export const sortTickets = (tickets: Ticket[], sortType: string) => {
  switch (sortType) {
    case 'cheapest':
      return tickets.sort((a, b) => a.price - b.price);
    case 'fastest':
      return tickets.sort(
        (a, b) => getTotalDuration(a.segments) - getTotalDuration(b.segments)
      );
    case 'optimal':
      return tickets.sort((a, b) => {
        const aTotalDuration = getTotalDuration(a.segments);
        const bTotalDuration = getTotalDuration(b.segments);
        if (aTotalDuration !== bTotalDuration) {
          return aTotalDuration - bTotalDuration;
        }
        const aTransfers = getTotalTransfers(a.segments);
        const bTransfers = getTotalTransfers(b.segments);
        if (aTransfers !== bTransfers) {
          return aTransfers - bTransfers;
        }
        return a.price - b.price;
      });
    default:
      return tickets.sort((a, b) => a.price - b.price);
  }
};
