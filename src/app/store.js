import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import nameReducer from '../features/nameDisplay/nameSclice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    storeName:nameReducer,
  },
});
