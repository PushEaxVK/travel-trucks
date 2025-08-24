import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCampers } from './operations';

const initialState = {
  campers: {
    items: [],
    total: null,
    page: 1,
    pages: 1,
    loadingCampers: false,
    errorCampers: null,
  },
};

const campersSlice = createSlice({
  name: 'campersList',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCampers.fulfilled, (state, action) => {
        const { items, total, page, pages } = action.payload;
        if (page === 1) {
          state.campers.items = items;
        } else {
          state.campers.items = [...state.campers.items, ...items];
        }
        state.campers.total = total;
        state.campers.page = page;
        state.campers.pages = pages;
        state.campers.loadingCampers = false;
      })
      .addCase(fetchAllCampers.pending, (state) => {
        state.campers.errorCampers = null;
        state.campers.loadingCampers = true;
      })
      .addCase(fetchAllCampers.rejected, (state, action) => {
        state.campers.errorCampers = action.payload;
        state.campers.loadingCampers = false;
      });
  },
});

export const campersReducer = campersSlice.reducer;
