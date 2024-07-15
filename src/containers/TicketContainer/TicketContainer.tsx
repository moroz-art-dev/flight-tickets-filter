import {loadTickets} from '@app/store/redux/features/tickets/ticketsThunks';
import {useAppDispatch, useAppSelector} from '@app/store/redux/hooks';
import LoadMore from '@components/features/lists/pagination/LoadMore';
import TicketList from '@components/features/lists/TicketList';
import React, {useEffect, useState, useCallback, useMemo} from 'react';

const TICKETS_PER_PAGE = 5;

const TicketContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const filteredTickets = useAppSelector(
    state => state.tickets.filteredTickets
  );
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(loadTickets());
  }, [dispatch]);

  const visibleTickets = useMemo(() => {
    const endIndex = page * TICKETS_PER_PAGE;
    return filteredTickets.slice(0, endIndex);
  }, [page, filteredTickets]);

  const handleLoadMore = useCallback(() => {
    setPage(prevPage => prevPage + 1);
  }, []);

  return (
    <div>
      <TicketList tickets={visibleTickets} />
      {visibleTickets.length < filteredTickets.length && (
        <LoadMore onClick={handleLoadMore} count={TICKETS_PER_PAGE} />
      )}
    </div>
  );
};

export default React.memo(TicketContainer);
