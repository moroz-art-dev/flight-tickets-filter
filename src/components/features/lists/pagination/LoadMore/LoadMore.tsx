import classNames from 'classnames/bind';
import React from 'react';
import {useTranslation} from 'react-i18next';

import styles from './LoadMore.module.scss';

const cx = classNames.bind(styles);

interface LoadMoreProps {
  onClick: () => void;
  count: number;
}

const LoadMore: React.FC<LoadMoreProps> = ({onClick, count}) => {
  const {t} = useTranslation();
  return (
    <button className={cx('load-more')} onClick={onClick}>
      {t('showMore')} {count} {t('tickets')}
    </button>
  );
};

export default LoadMore;
