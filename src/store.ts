import { configureStore } from '@reduxjs/toolkit';
import productStore from './store/product';

const store = configureStore({
  reducer: {
    productStore: productStore.reducer,
  },
});

export default store;
