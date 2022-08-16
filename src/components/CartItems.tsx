function CartItems(props: any) {
  return (
    <div className="lg:flex lg:items-center mt-4 px-2 lg:px-0">
      <div>
        <figure className="w-56 min-w-full flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white">
          <img
            src={props.image}
            alt="상품 이미지"
            className="object-contain w-full h-48"
          />
        </figure>
      </div>
      <div className="card-body px-1 lg:px-12">
        <h2 className="card-title">{props.title}</h2>
        <p className="mt-2 mb-4 text-3xl">${props.price}</p>
        <div className="card-actions">
          <div className="btn-group">
            <button className="btn btn-primary">-</button>
            <button className="btn btn-ghost no-animation">2</button>
            <button className="btn btn-primary">+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
