import { useDispatch } from 'react-redux';
import productStore from './store/product';

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

// 해당 함수는 App.tsx에서 쓰였습니다.
export default async function bringProducts() {
  const dispatch = useDispatch();

  let fashion: ProductData[] = [];
  let accessory: ProductData[] = [];
  let digital: ProductData[] = [];
  let all: ProductData[] = [];

  try {
    const URL = 'https://fakestoreapi.com/products';
    const response = await fetch(URL);
    const products: ProductData[] = await response.json();
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

    dispatch(productStore.actions.fetchFashion({ data: fashion }));
    dispatch(productStore.actions.fetchAccessory({ data: accessory }));
    dispatch(productStore.actions.fetchDigital({ data: digital }));
    dispatch(productStore.actions.fetchAll({ data: all }));
  } catch (error) {
    console.error(error);
  }
}
