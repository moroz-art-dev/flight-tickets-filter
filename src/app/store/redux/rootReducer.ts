import {combineReducers} from '@reduxjs/toolkit';

import filterReducer from './features/filter/filterSlice';
import sortReducer from './features/sort/sortSlice';
import ticketsReducer from './features/tickets/ticketsSlice';

const rootReducer = combineReducers({
  tickets: ticketsReducer,
  filter: filterReducer,
  sort: sortReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
