import Content from '@components/layout/Content';
import Main from '@components/layout/Main';
import Sidebar from '@components/layout/Sidebar';
import FilterContainer from '@containers/FilterContainer';
import SortContainer from '@containers/SortContainer';
import TicketContainer from '@containers/TicketContainer';
import React from 'react';

import styles from './HomePage.module.scss';

const HomePage: React.FC = () => {
  return (
    <div className={styles['home-page']}>
      <Main>
        <Sidebar>
          <FilterContainer />
        </Sidebar>
        <Content>
          <SortContainer />
          <TicketContainer />
        </Content>
      </Main>
    </div>
  );
};

export default HomePage;
