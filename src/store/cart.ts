import { createSlice } from '@reduxjs/toolkit';

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

export interface CartAction {
  payload: {
    id: number;
  };
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: {} as CartState,
    totalCount: 0,
  },
  reducers: {
    addCart: (state: any, action: CartAction) => {
      if (state.items[action.payload.id]) {
        state.items[action.payload.id].count++;
      } else {
        state.items[action.payload.id] = {
          id: action.payload.id,
          count: 1,
        };
      }
      state.totalCount++;
    },
    removeCart: (state: any, action: CartAction) => {
      state.items[action.payload.id].count--;
      state.totalCount--;
      if (state.items[action.payload.id].count === 0)
        delete state.items[action.payload.id];
    },
    buy: (state: any) => {
      state.items = {};
      state.totalCount = 0;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
