import './App.css';
import AppRouter from './router/AppRouter';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
