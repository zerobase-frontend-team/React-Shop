import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, Navigate, Route, Router, Routes } from 'react-router-dom';
import itemsJSON from '../assets/items.json';
import Product from './Product';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart';

function Items({ category = '', theme = 'dark' }) {
  const [categoryName, setCategoryName] = useState('');
  const [dataTheme, setDataTheme] = useState('dark');
  const [items, setItems] = useState([]);

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
    if (category === 'fashion') {
      getItems('fashion');
    } else if (category === 'digital') {
      getItems('digital');
    } else if (category === 'accessory') {
      getItems('accessory');
    }
  }, [categoryName]);

  const getItems = (category: string) => {
    let itemsArray: React.SetStateAction<never[]> = [];

    const map = new Map(Object.entries(itemsJSON));
    const data = new Map(Object.entries(map.get('data') || {}));

    for (let value of data.values()) {
      if (value.category === category) {
        itemsArray.push(value as never);
      }
    }
    setItems(itemsArray);
  };

  return (
    <section className="main pt-16" data-theme={dataTheme}>
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
                <Wrapper key={el.imageName}>
                  <Link to={`/product/${el.imageName}`}>
                    <div className="card shadow-xl m-2">
                      <figure className="h-72 bg-white">
                        <img
                          src={`./${category}/${el.imageName}.jpg`}
                          alt={el.title}
                          className="max-h-[70%] sm:w-1/2 hover:scale-110 ease-linear duration-200"
                        />
                      </figure>
                      <div className="card-body h-52">
                        <h2 className="card-title text-base">{el.itemName}</h2>
                        <p>${el.cost}</p>
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
