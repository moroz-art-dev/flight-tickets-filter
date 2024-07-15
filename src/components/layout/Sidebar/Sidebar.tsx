import React from 'react';

import styles from './Sidebar.module.scss';
import SidebarProps from './SidebarProps';

const Sidebar: React.FC<SidebarProps> = ({children}) => {
  return <aside className={styles.sidebar}>{children}</aside>;
};

export default Sidebar;
