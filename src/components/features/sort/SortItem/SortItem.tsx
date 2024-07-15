import classNames from 'classnames/bind';
import React from 'react';
import {useTranslation} from 'react-i18next';

import styles from './SortItem.module.scss';

const cx = classNames.bind(styles);

interface SortItemProps {
  id: string;
  label: string;
  isActive: boolean;
  onClick: (id: string) => void;
  isFirst: boolean;
  isLast: boolean;
}

const SortItem: React.FC<SortItemProps> = ({
  id,
  isActive,
  onClick,
  isFirst,
  isLast,
}) => {
  const {t} = useTranslation();
  return (
    <button
      className={cx('sort-item', {
        'sort-item--active': isActive,
        'sort-item--first': isFirst,
        'sort-item--last': isLast,
      })}
      onClick={() => onClick(id)}
    >
      {t(id)}
    </button>
  );
};

export default SortItem;
