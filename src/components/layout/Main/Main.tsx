import classNames from 'classnames';
import React from 'react';

import styles from './Main.module.scss';
import MainProps from './MainProps';
import Header from '../Header';

const Main: React.FC<MainProps> = ({children}) => {
  return (
    <div className={styles.main}>
      <Header />
      <div className={classNames(styles.layout, 'layout')}>{children}</div>
    </div>
  );
};

export default Main;
