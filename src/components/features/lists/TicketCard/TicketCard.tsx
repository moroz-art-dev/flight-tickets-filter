import logo from '@assets/images/a4e-logo.svg';
import {formatCurrency} from '@utils/formatCurrency';
import {getTransfersLabel} from '@utils/inflections';
import classNames from 'classnames/bind';
import React from 'react';

import styles from './TicketCard.module.scss';

const cx = classNames.bind(styles);

interface Segment {
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  duration: number;
  stops: string[];
  transfers: number;
}

interface Ticket {
  id: string;
  price: number;
  currency: string;
  segments: Segment[];
}

interface TicketCardProps {
  ticket: Ticket;
}

const TicketCard: React.FC<TicketCardProps> = ({ticket}) => {
  return (
    <div className={cx('ticket-card')}>
      <div className={cx('ticket-card__header')}>
        <span className={cx('ticket-card__price')}>
          {formatCurrency(ticket.price, ticket.currency)}
        </span>
        <span className={cx('ticket-card__logo')}>
          <img src={logo} alt='Airline logo' />
        </span>
      </div>
      <div className={cx('ticket-card__segments')}>
        {ticket.segments.map((segment, index) => (
          <div
            key={index}
            className={cx('ticket-card__segment', {
              'ticket-card__segment--last':
                index === ticket.segments.length - 1,
            })}
          >
            <div className={cx('ticket-card__column')}>
              <span className={cx('ticket-card__label')}>
                {segment.origin} – {segment.destination}
              </span>
              <span className={cx('ticket-card__value')}>
                {segment.departureTime} – {segment.arrivalTime}
              </span>
            </div>
            <div className={cx('ticket-card__column')}>
              <span className={cx('ticket-card__label')}>В ДОРОЗІ</span>
              <span className={cx('ticket-card__value')}>
                {Math.floor(segment.duration / 60)}г {segment.duration % 60}хв
              </span>
            </div>
            <div className={cx('ticket-card__column')}>
              <span className={cx('ticket-card__label')}>
                {getTransfersLabel(segment.transfers)}
              </span>
              <span className={cx('ticket-card__value')}>
                {segment.stops.join(', ')}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketCard;
