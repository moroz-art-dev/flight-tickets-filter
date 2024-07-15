import Checkbox from '@components/common/Checkbox';
import {FilterOption} from '@config/filterConfig';
import classNames from 'classnames/bind';
import React from 'react';

import styles from './FilterItem.module.scss';

const cx = classNames.bind(styles);

interface FilterItemProps {
  option: FilterOption;
  isSelected: boolean;
  onFilterChange: (filterId: string) => void;
}

const FilterItem: React.FC<FilterItemProps> = ({
  option,
  isSelected,
  onFilterChange,
}) => {
  const handleChange = () => {
    onFilterChange(option.id);
  };

  return (
    <div className={cx('filter-item')}>
      <Checkbox
        checked={isSelected}
        onChange={handleChange}
        label={option.label}
      />
    </div>
  );
};

export default FilterItem;
