import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartActions } from '../store/cart';

function CartItems(props: any) {
  const dispatch = useDispatch();
  const cartItemCount = useSelector(
    (state: any) => state.cartStore.items[`${props.id}`].count,
  );

  const reduceFromCart = () => {
    dispatch(cartActions.removeCart({ id: props.id }));
  };

  const addToCart = () => {
    dispatch(cartActions.addCart({ id: props.id }));
  };

  return (
    <div className="lg:flex lg:items-center mt-4 px-2 lg:px-0">
      <Link to={'/product/' + props.id}>
        <figure className="w-56 min-w-full flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white">
          <img
            src={props.image}
            alt="상품 이미지"
            className="object-contain w-full h-48"
          />
        </figure>
      </Link>
      <div className="card-body px-1 lg:px-12">
        <h2 className="card-title">{props.title}</h2>
        <p className="mt-2 mb-4 text-3xl">
          ${(props.price * cartItemCount).toFixed(2)}
        </p>
        <div className="card-actions">
          <div className="btn-group">
            <button className="btn btn-primary" onClick={reduceFromCart}>
              -
            </button>
            <button className="btn btn-ghost no-animation">
              {cartItemCount}
            </button>
            <button className="btn btn-primary" onClick={addToCart}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
