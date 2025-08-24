import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { buildCampersUrl } from '../../services/buildCampersUrl';

export const fetchAllCampers = createAsyncThunk(
  'campers/fetchAll',
  async (
    {
      page = 1,
      limit = 5,
      filterEquipment = [],
      filterVehicleType = null,
      location = '',
    },
    thunkAPI
  ) => {
    try {
      const url = buildCampersUrl({
        page,
        limit,
        filterEquipment,
        filterVehicleType,
        location,
      });
      const response = await axios.get(url);
      const pages = Math.ceil(response.data.total / limit);

      const data = {
        items: response.data.items,
        total: response.data.total,
        page: page > pages ? pages : page,
        pages,
      };
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
