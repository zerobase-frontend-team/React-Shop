import './App.css';
import AppRouter from './router/AppRouter';
import Header from './components/Header';
import Footer from './components/Footer';
import { cartActions } from './store/cart';
import { useAppDispatch } from './store';
import { fetchProducts } from './store/product';
import { createContext, useState, useEffect } from 'react';

interface Theme {
  theme: string;
  setTheme: (theme: string) => void;
}

export const themeContext = createContext<Theme>({
  theme: '',
  setTheme: (theme) => {},
});

function App() {
  // prduct data를 store로 보내기
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  // 라이트모드, 다크모드 관리
  const [theme, setTheme] = useState<string>('light');

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      <div data-theme={theme}>
        <Header />
        <AppRouter />
        <Footer />
      </div>
    </themeContext.Provider>
  );
}

export default App;
