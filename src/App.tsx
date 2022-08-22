import './App.css';
import AppRouter from './router/AppRouter';
import Header from './components/Header';
import Footer from './components/Footer';
import { cartActions } from './store/cart';
import bringProducts from './bringProducts';

function App() {
  bringProducts();

  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
