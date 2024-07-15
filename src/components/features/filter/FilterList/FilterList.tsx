import {FilterOption} from '@config/filterConfig';
import classNames from 'classnames/bind';
import React from 'react';
import {useTranslation} from 'react-i18next';

import styles from './FilterList.module.scss';
import FilterItem from '../FilterItem';

const cx = classNames.bind(styles);

interface FilterListProps {
  title: string;
  options: FilterOption[];
  selectedFilter: string[];
  onFilterChange: (filterId: string) => void;
}

const FilterList: React.FC<FilterListProps> = ({
  title,
  options,
  selectedFilter,
  onFilterChange,
}) => {
  const {t} = useTranslation();

  return (
    <div className={cx('filter-list')}>
      <h3 className={cx('filter-list__title')}>{t(title).toUpperCase()}</h3>
      <div className={cx('filter-list__options')}>
        {options.map(option => (
          <FilterItem
            key={option.id}
            option={option}
            isSelected={selectedFilter.includes(option.id)}
            onFilterChange={onFilterChange}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterList;
