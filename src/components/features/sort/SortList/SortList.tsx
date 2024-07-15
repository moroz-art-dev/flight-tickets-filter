import {sortOptions} from '@config/sortConfig';
import classNames from 'classnames/bind';
import React from 'react';

import styles from './SortList.module.scss';
import SortItem from '../SortItem';

const cx = classNames.bind(styles);

interface SortListProps {
  activeSort: string;
  onSortChange: (id: string) => void;
}

const SortList: React.FC<SortListProps> = ({activeSort, onSortChange}) => {
  return (
    <div className={cx('sort-list')}>
      <div className={cx('sort-list__items')}>
        {sortOptions.map((option, index) => (
          <SortItem
            key={option.id}
            id={option.id}
            label={option.label}
            isActive={option.id === activeSort}
            onClick={onSortChange}
            isFirst={index === 0}
            isLast={index === sortOptions.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default SortList;
