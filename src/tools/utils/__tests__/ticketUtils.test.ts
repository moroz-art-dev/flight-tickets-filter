import {Ticket, Segment} from '@app/store/redux/features/tickets/ticketsTypes';

import {
  filterTickets,
  getTotalDuration,
  getTotalTransfers,
  sortTickets,
} from '../ticketUtils';

describe('filterTickets', () => {
  const tickets: Ticket[] = [
    {price: 100, segments: [{transfers: 0}, {transfers: 1}]},
    {price: 200, segments: [{transfers: 1}, {transfers: 2}]},
    {price: 300, segments: [{transfers: 2}, {transfers: 3}]},
  ] as Ticket[];

  it('returns all tickets when filter is empty or includes "all"', () => {
    expect(filterTickets(tickets, [])).toEqual(tickets);
    expect(filterTickets(tickets, ['all'])).toEqual(tickets);
  });

  it('filters tickets correctly based on transfers', () => {
    expect(filterTickets(tickets, ['0', '1'])).toEqual([tickets[0]]);
    expect(filterTickets(tickets, ['1', '2'])).toEqual([tickets[1]]);
    expect(filterTickets(tickets, ['2', '3'])).toEqual([tickets[2]]);
  });
});

describe('getTotalDuration', () => {
  it('calculates total duration correctly', () => {
    const segments: Segment[] = [{duration: 120}, {duration: 180}] as Segment[];
    expect(getTotalDuration(segments)).toBe(300);
  });
});

describe('getTotalTransfers', () => {
  it('calculates total transfers correctly', () => {
    const segments: Segment[] = [{transfers: 1}, {transfers: 2}] as Segment[];
    expect(getTotalTransfers(segments)).toBe(3);
  });
});

describe('sortTickets', () => {
  const tickets: Ticket[] = [
    {price: 300, segments: [{duration: 200}, {duration: 200}]},
    {price: 200, segments: [{duration: 150}, {duration: 150}]},
    {price: 100, segments: [{duration: 300}, {duration: 300}]},
  ] as Ticket[];

  it('sorts tickets by price correctly', () => {
    const sorted = sortTickets([...tickets], 'cheapest');
    expect(sorted[0].price).toBe(100);
    expect(sorted[2].price).toBe(300);
  });

  it('sorts tickets by duration correctly', () => {
    const sorted = sortTickets([...tickets], 'fastest');
    expect(getTotalDuration(sorted[0].segments)).toBe(300);
    expect(getTotalDuration(sorted[2].segments)).toBe(600);
  });

  it('sorts tickets optimally correctly', () => {
    const optimalTickets: Ticket[] = [
      {
        price: 200,
        segments: [
          {duration: 200, transfers: 1},
          {duration: 200, transfers: 1},
        ],
      },
      {
        price: 100,
        segments: [
          {duration: 200, transfers: 2},
          {duration: 200, transfers: 2},
        ],
      },
      {
        price: 300,
        segments: [
          {duration: 200, transfers: 1},
          {duration: 200, transfers: 1},
        ],
      },
    ] as Ticket[];
    const sorted = sortTickets(optimalTickets, 'optimal');
    expect(sorted[0].price).toBe(200);
    expect(sorted[1].price).toBe(300);
    expect(sorted[2].price).toBe(100);
  });
});
