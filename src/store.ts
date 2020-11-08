import { createStore } from '@reduxjs/toolkit';
import { rootReducer } from '../src/reducers/rootReducer';

export const store = createStore({
  rootReducer,
});
