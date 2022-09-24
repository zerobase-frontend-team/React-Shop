import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface ProductData {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const fetchProducts = createAsyncThunk('reducer1/fetchTitles', async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const products: ProductData[] = await response.json();

  let fashion: ProductData[] = [];
  let accessory: ProductData[] = [];
  let digital: ProductData[] = [];
  let all: ProductData[] = [];

  products.forEach((product) => {
    switch (product.category) {
      case "men's clothing":
        fashion.push(product);
        break;
      case "women's clothing":
        fashion.push(product);
        break;
      case 'jewelery':
        accessory.push(product);
        break;
      case 'electronics':
        digital.push(product);
        break;
      default:
        break;
    }

    all.push(product);
  });

  return { fashion, accessory, digital, all };
});

const productStore = createSlice({
  name: 'products',
  initialState: {
    fetchStatus: '',
    fashion: [],
    accessory: [],
    digital: [],
    all: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.fetchStatus = 'loading';
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.fetchStatus = 'fetched';
      state.fashion = action.payload.fashion as any;
      state.accessory = action.payload.accessory as any;
      state.digital = action.payload.digital as any;
      state.all = action.payload.all as any;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.fetchStatus = 'failed';
    });
  },
});

export default productStore;
export { fetchProducts };
