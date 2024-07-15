import React from 'react';

import styles from './Content.module.scss';
import ContentProps from './ContentProps';

const Content: React.FC<ContentProps> = ({children}) => {
  return <main className={styles.content}>{children}</main>;
};

export default Content;
