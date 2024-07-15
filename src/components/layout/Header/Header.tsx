import React from 'react';

import styles from './Header.module.scss';
import Logo from '../Logo';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  );
};

export default Header;
