import './App.css';
import AppRouter from './router/AppRouter';
import Header from './components/Header';
import Footer from './components/Footer';
import { cartActions } from './store/cart';
import { useAppDispatch } from './store';
import { fetchProducts } from './store/product';

function App() {
  const dispatch = useAppDispatch();
  dispatch(fetchProducts());

  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
