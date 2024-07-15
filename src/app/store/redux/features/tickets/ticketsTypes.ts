export interface Ticket {
  id: string;
  price: number;
  carrier: string;
  currency: string;
  logo?: string;
  segments: Segment[];
}

export interface Segment {
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  duration: number;
  stops: string[];
  transfers: number;
}

export interface TicketState {
  tickets: Ticket[];
  filteredTickets: Ticket[];
  loading: boolean;
  error: string | null;
}
