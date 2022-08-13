import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Items from '../pages/Items';
import Product from '../pages/Product';
import Cart from '../pages/Cart';
import NotFound from '../pages/NotFound';

function AppRouter() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/fashion" element={<Items category="fashion" />}></Route>
          <Route path="/digital" element={<Items category="digital" />}></Route>
          <Route
            path="/accessory"
            element={<Items category="accessory" />}
          ></Route>
          <Route path="/product/:pid" element={<Product />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default AppRouter;
