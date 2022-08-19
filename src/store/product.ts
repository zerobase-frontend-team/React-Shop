import { createSlice } from '@reduxjs/toolkit';

const productStore = createSlice({
  name: 'products',
  initialState: {
    fashion: [],
    accessory: [],
    digital: [],
    all: [],
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
    fetchAll(state, action) {
      state.all = action.payload.data;
    },
  },
});

export default productStore;
