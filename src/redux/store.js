import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  filters: [],
};

const rootReducer = (state = initialState, action) => {
  return state;
};

export const store = configureStore({
  reducer: rootReducer,
});
