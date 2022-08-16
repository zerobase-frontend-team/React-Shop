import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

export interface CartInfo {
  id: number;
  count: number;
}

interface CartState {
  items: Record<string, CartInfo>;
}

export interface CartItems {
  id: number;
  title: string;
  price: number;
  count: number;
  image: string;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: {} as CartState,
    totalCount: 0,
    totalPrice: 0,
  },
  reducers: {
    totalCount: (state: any) => {
      Object.keys(state.items).reduce((acc, id) => {
        return acc + state.items[id].count;
      }, 0);
    },
    totalPrice: (state: any) => {
      Object.keys(state.items).reduce((acc, id) => {
        return acc + state.items[id].price * state.items[id].count;
      }, 0);
    },
    addCart: (state: any, action: any) => {
      if (state.items[action.payload.id]) {
        state.items[action.payload.id].count += action.payload.count;
      } else {
        state.items[action.payload.id] = {
          id: action.payload.id,
          count: action.payload.count,
        };
      }
      state.totalCount += action.payload.count;
    },
    removeCart: (state: any, action: any) => {
      state.items[action.payload.id].count--;
      state.totalCount--;
      if (state.items[action.payload.id].count === 0)
        state.items.delete(action.payload.id);

      state.totalCount.payload.count--;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
