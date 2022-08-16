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
  category: string;
  image: string;
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    let fashion: ProductData[] = [];
    let accessory: ProductData[] = [];
    let digital: ProductData[] = [];
    let search: { id: number; title: string; price: number; image: string }[] =
      [];

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

        search.push({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
        });
      });

      dispatch(productStore.actions.fetchFashion({ data: fashion }));
      dispatch(productStore.actions.fetchAccessory({ data: accessory }));
      dispatch(productStore.actions.fetchDigital({ data: digital }));
      dispatch(productStore.actions.fetchSearch({ data: search }));
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
