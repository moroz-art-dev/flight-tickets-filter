import rootReducer from '@app/store/redux/rootReducer';
import ResourceLoader from '@components/features/loaders/ResourceLoader';
import {configureStore} from '@reduxjs/toolkit';
import React from 'react';
import {I18nextProvider} from 'react-i18next';
import {Provider} from 'react-redux';

import {AppProviderProps} from './AppProviderProps';
import i18n from '../i18n/i18n';

const store = configureStore({
  reducer: rootReducer,
});

const AppProvider: React.FC<AppProviderProps> = ({children}) => {
  return (
    <ResourceLoader>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
      </Provider>
    </ResourceLoader>
  );
};

export default AppProvider;
