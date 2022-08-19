import { useSelector } from 'react-redux';
import CartItems from './CartItems';

function CartList() {
  const products = useSelector((state: any) => state.productStore.all);
  const cartItems = useSelector((state: any) => state.cartStore.items);

  let items: any = [];

  Object.keys(cartItems).map((id) => {
    const product = products.find((prod: any) => prod.id === +id);
    items.push(product);
  });

  console.log(items);

  return (
    <div className="lg:flex justify-between mb-20">
      <div>
        {items.map((item: any) => (
          <CartItems
            image={item.image}
            id={item.id}
            key={item.id}
            price={item.price}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
}

export default CartList;
