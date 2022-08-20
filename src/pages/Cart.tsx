import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartEmpty from '../components/CartEmpty';
import CartList from '../components/CartList';
import cart, { cartActions } from '../store/cart';

function Cart() {
  const cartItemsCount = useSelector(
    (state: any) => state.cartStore.totalCount,
  );

  return (
    <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <div className="text-sm breadcrumbs">
        <ul>
          <li>홈</li>
          <li>장바구니</li>
        </ul>
      </div>
      <div>{cartItemsCount === 0 ? <CartEmpty /> : <CartList />}</div>
    </section>
  );
}

export default Cart;
