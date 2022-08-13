import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

interface ProductData {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
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

  const [productData, setProductData] = useState<ProductData[]>([]);

  // 홈페이지와 카테고리 페이지의 css 구분하기
  useEffect(() => {
    if (page === 'home') {
      productListComp.current?.classList.add('overflow-x-scroll');
      productContainer.current?.classList.add('w-[1000px]', 'grid-cols-4');
    } else if (page === 'category') {
      productContainer.current?.classList.add('grid-cols-1');
    }
  }, []);

  const categoryURLs: { [key: string]: string[] } = {
    fashion: ["men's clothing", "women's clothing"],
    accessory: ['jewelery'],
    digital: ['electronics'],
  };

  let clothing: ProductData[] = [];

  // 자료 가져와서 뿌리기
  useEffect(() => {
    async function fetchProducts(url: string) {
      const fullURL = 'https://fakestoreapi.com/products/category/' + url;
      const response = await fetch(fullURL);
      const data: ProductData[] = await response.json();
      // 가져온 자료를 바탕으로 재랜더링
      if (url === "men's clothing") {
        clothing = [...data];
      } else if (url === "women's clothing") {
        clothing = [...clothing, ...data];
        setProductData(clothing);
      } else {
        setProductData(data);
      }
    }

    try {
      categoryURLs[category].forEach((url) => {
        fetchProducts(url);
      });
    } catch (e) {
      console.error(e);
    }
  }, []);

  const categoryTitles: { [key: string]: string } = {
    fashion: '패션',
    digital: '디지털',
    accessory: '액세서리',
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
          {productData.map((productData, index) => {
            if (page === 'home' && index < 4) {
              return <Product key={productData.id} data={productData} />;
            } else if (page === 'category') {
              return <Product key={productData.id} data={productData} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
