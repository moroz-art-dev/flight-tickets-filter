import classNames from 'classnames';
import React from 'react';
import {useTranslation} from 'react-i18next';

import styles from './Checkbox.module.scss';

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
  label?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({checked, onChange, label}) => {
  const {t} = useTranslation();

  const checkboxClass = classNames(styles.checkbox, {
    [styles['checkbox--checked']]: checked,
  });

  return (
    <label className={checkboxClass}>
      <input
        type='checkbox'
        checked={checked}
        onChange={onChange}
        className={styles['checkbox__input']}
      />
      <span className={styles['checkbox__icon']}></span>
      {label && <span className={styles['checkbox__label']}>{t(label)}</span>}
    </label>
  );
};

export default Checkbox;
