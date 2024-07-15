import {Ticket} from '@app/store/redux/features/tickets/ticketsTypes';
import React from 'react';

import styles from './TicketList.module.scss';
import TicketCard from '../TicketCard';

interface TicketListProps {
  tickets: Ticket[];
}

const TicketList: React.FC<TicketListProps> = ({tickets}) => {
  return (
    <div className={styles.ticketList}>
      {tickets.map(ticket => (
        <TicketCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default TicketList;
