import { createSlice } from '@reduxjs/toolkit';

const productStore = createSlice({
  name: 'products',
  initialState: {
    fashion: [],
    accessory: [],
    digital: [],
    search: [],
  },
  reducers: {
    fetchFashion(state, action) {
      state.fashion = action.payload.data;
    },
    fetchAccessory(state, action) {
      state.accessory = action.payload.data;
    },
    fetchDigital(state, action) {
      state.digital = action.payload.data;
    },
    fetchSearch(state, action) {
      state.search = action.payload.data;
    },
  },
});

export default productStore;
