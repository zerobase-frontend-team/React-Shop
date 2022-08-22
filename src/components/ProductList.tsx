import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

interface ProductData {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

function SkeletonProduct() {
  return (
    <div className="card shadow-xl m-2">
      <figure className="h-72 bg-white">
        <img className="w-1/2 h-1/2 animate-pulse bg-slate-400 border-none" />
      </figure>
      <div className="card-body h-52">
        <h2 className="mb-4">
          <div className="h-6 mb-2 animate-pulse bg-slate-400"></div>
          <div className="h-6 w-3/4 animate-pulse bg-slate-400"></div>
        </h2>
        <div>
          <div className="h-4 mb-2 animate-pulse bg-slate-400"></div>
          <div className="h-4 mb-2 animate-pulse bg-slate-400"></div>
          <div className="h-4 w-3/4 animate-pulse bg-slate-400"></div>
        </div>
      </div>
    </div>
  );
}

// 하나의 아이템을 나타내는 컴포넌트입니다.
// 아래의 ProductList의 자식 컴포넌트입니다.
function Product({ data }: { data: ProductData }) {
  return (
    <Link to={`/product/${data.id}`}>
      <div className="card shadow-xl m-2">
        <figure className="h-72 bg-white">
          <img
            src={data.image}
            alt={data.title}
            className="max-h-[70%] sm:w-1/2 hover:scale-110 ease-linear duration-200"
          />
        </figure>
        <div className="card-body h-52">
          <h2 className="card-title text-base">{data.title}</h2>
          <p>${data.price}</p>
        </div>
      </div>
    </Link>
  );
}

// product list 컴포넌트, export가 되는 컴포넌트입니다.
function ProductList({ page, category }: { page: string; category: string }) {
  const productListComp = useRef<HTMLDivElement>(null);
  const productContainer = useRef<HTMLDivElement>(null);

  interface State {
    productStore: {
      [key: string]: ProductData[];
    };
  }

  const productData = useSelector(
    (state: State) => state.productStore[category],
  );

  // 홈페이지와 카테고리 페이지의 css 구분하기
  useEffect(() => {
    if (page === 'home') {
      productListComp.current?.classList.add('overflow-x-scroll');
      productContainer.current?.classList.add('w-[1000px]', 'grid-cols-4');
    } else if (page === 'category') {
      productContainer.current?.classList.add('grid-cols-1');
    }
  }, []);

  const categoryTitles: { [key: string]: string } = {
    fashion: '패션',
    accessory: '액세서리',
    digital: '디지털',
  };

  return (
    <div data-theme="dark">
      <h1 className="text-center pt-16 mb-8 text-4xl font-bold">
        {categoryTitles[category]}
      </h1>
      <div
        id="product-list-component"
        className="p-4 sm:overflow-visible"
        ref={productListComp}
      >
        <div
          id="product-container"
          className="grid sm:w-full sm:grid-cols-2 md:grid-cols-4"
          ref={productContainer}
        >
          {productData.length === 0
            ? Array(4)
                .fill(0)
                .map((item, index) => <SkeletonProduct key={index} />)
            : productData.map((productDatum, index) => {
                if (page === 'home' && index < 4) {
                  return <Product key={productDatum.id} data={productDatum} />;
                } else if (page === 'category') {
                  return <Product key={productDatum.id} data={productDatum} />;
                }
              })}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
