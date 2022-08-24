import { RootState, useAppDispatch, useAppSelector } from '../store';
import { cartActions } from '../store/cart';
import CartItems from './CartItems';

interface CartProductID {
  readonly id: number;
}

export interface InCartItems {
  id: number;
  price: number;
  image: string;
  title: string;
}

function CartList() {
  const products = useAppSelector((state: RootState) => state.productStore.all);
  const cartItems = useAppSelector((state: any) => state.cartStore.items);
  const dispatch = useAppDispatch();

  let items: InCartItems[] = [];
  let totalPrice = 0;

  Object.keys(cartItems).map((id) => {
    const product: any = products.find(
      (prod: CartProductID) => prod.id === Number(id),
    );
    items.push(product);
    totalPrice += product.price * cartItems[id].count;
  });

  const buyAll = () => {
    dispatch(cartActions.buy());
  };

  return (
    <>
      <div className="lg:flex justify-between mb-20">
        <div>
          {items.map((item: InCartItems) => (
            <CartItems
              image={item.image}
              id={item.id}
              key={item.id}
              price={item.price}
              title={item.title}
            />
          ))}
        </div>
        <div className="self-start shrink-0 flex items-center mt-10 mb-20">
          <span className="text-xl md:text-2xl">
            총 : ${totalPrice.toFixed(2)}
          </span>
          <label
            htmlFor="confirm-modal"
            className="modal-button btn btn-primary ml-5"
          >
            구매하기
          </label>
        </div>
      </div>
      <div>
        <input type="checkbox" id="confirm-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">정말로 구매하시겠습니까?</h3>
            <p className="py-4">장바구니의 모든 상품들이 삭제됩니다.</p>
            <div className="modal-action">
              <label
                htmlFor="confirm-modal"
                className="btn btn-primary"
                onClick={buyAll}
              >
                네
              </label>
              <label htmlFor="confirm-modal" className="btn btn-outline">
                아니오
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartList;
