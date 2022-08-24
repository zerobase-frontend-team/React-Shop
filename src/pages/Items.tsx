import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

interface ProductData {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

function Items({ category = '' }) {
  const [categoryName, setCategoryName] = useState('');
  const [items, setItems] = useState<ProductData[]>([]);

  interface State {
    productStore: {
      [key: string]: ProductData[];
    };
  }

  const productData = useSelector(
    (state: State) => state.productStore[category],
  );

  useEffect(() => {
    if (category === 'fashion') {
      setCategoryName('패션');
    } else if (category === 'digital') {
      setCategoryName('디지털');
    } else if (category === 'accessory') {
      setCategoryName('액세서리');
    } else {
      <Navigate to="*" replace={true} />;
    }
  });

  useEffect(() => {
    setItems(productData);
  }, [categoryName]);

  return (
    <section className="main">
      <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>홈</li>
            <li>{categoryName}</li>
          </ul>
        </div>
        <article className="pt-2 lg:pt-4 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto">
          <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
            {categoryName}
          </h2>
          <div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list"
            data-scroll="false"
          >
            {items.map((el: any) => {
              return (
                <Wrapper key={el.id}>
                  <Link to={`/product/${el.id}`}>
                    <div className="card shadow-xl m-2">
                      <figure className="h-72 bg-white">
                        <img
                          src={el.image}
                          alt={el.title}
                          className="max-h-[70%] sm:w-1/2 hover:scale-110 ease-linear duration-200"
                        />
                      </figure>
                      <div className="card-body h-52">
                        <h2 className="card-title text-base">{el.title}</h2>
                        <p>${el.price}</p>
                      </div>
                    </div>
                  </Link>
                </Wrapper>
              );
            })}
          </div>
        </article>
      </section>
    </section>
  );
}

const Wrapper = styled.div`
  .card figure img {
    /* max-height: 50%; */
    max-width: 40%;
  }

  .duration-300 {
    transition-duration: 0.3s;
  }

  .transition-transform {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  .card:hover {
    img {
      transform: scale(120%);
    }
  }
`;

export default Items;
