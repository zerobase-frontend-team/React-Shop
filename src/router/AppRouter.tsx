import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Fashion from '../pages/Fashion';
import Accessory from '../pages/Accessory';
import Digital from '../pages/Digital';
import Product from '../pages/Product';
import Cart from '../pages/Cart';
import NotFound from '../pages/NotFound';

function AppRouter() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/fashion" element={<Fashion />}></Route>
          <Route path="/digital" element={<Digital />}></Route>
          <Route path="/accessory" element={<Accessory />}></Route>
          <Route path="/product/:pid" element={<Product />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default AppRouter;
