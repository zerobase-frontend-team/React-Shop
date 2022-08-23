import { configureStore } from '@reduxjs/toolkit';
import productStore from './store/product';
import cartSlice from './store/cart';

const store = configureStore({
  reducer: {
    productStore: productStore.reducer,
    cartStore: cartSlice,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
