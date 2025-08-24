import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filtres',
  initialState: {
    location: '',
    equipment: [],
    vechileType: '',
  },
  reducers: {
    changeFiltres: (state, action) => {
      state.location = action.payload.location;
      state.equipment = action.payload.equipment;
      state.vechileType = action.payload.vechileType;
    },
  },
});

export const { changeFiltres } = slice.actions;

export default slice.reducer;
