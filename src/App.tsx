import './App.css';
import AppRouter from './router/AppRouter';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import productStore from './store/product';
import { cartActions } from './store/cart';

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

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    let fashion: ProductData[] = [];
    let accessory: ProductData[] = [];
    let digital: ProductData[] = [];
    let all: ProductData[] = [];

    (async () => {
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
    })();
  }, []);

  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
