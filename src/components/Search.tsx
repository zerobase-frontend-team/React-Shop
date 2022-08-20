import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

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

function Search() {
  const [searchArray, setSearchArray] = useState<ProductData[]>([]);
  const [isSearch, setIsSearch] = useState(false);
  const productData = useSelector((state: any) => state.productStore.all);
  const [theme, setTheme] = useState<string>('light');

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    const arr = [];
    for (let k in productData) {
      if (productData[k].title.includes(value)) {
        arr.push(productData[k]);
      }
    }
    setSearchArray(arr);
  };

  const onFocusHandler = () => {
    setIsSearch(true);
  };

  const onBlurHandler = () => {
    setIsSearch(false);
  };

  return (
    <>
      <input
        onChange={onChangeHandler}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        type={'search'}
        placeholder="검색"
        className="input input-bordered w-full max-w-xs"
        id="search"
      />
      {isSearch && (
        <ul
          data-theme={theme}
          tabIndex={0}
          className="menu dropdown-content p-2 shadow bg-base-100 w-52 mt-4 !fixed right-20 sm:!absolute sm:top-14 menu dropdown-content w-full sm:w-64 max-h-96 shadow text-base-content overflow-y-auto bg-white dark:bg-gray-600"
        >
          {searchArray.map((el) => (
            <li>
              <Link to={'#'} className="text-left js-searchedItem">
                <span className="text-left text-gray-600 dark:text-white line-clamp-2">
                  {el.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Search;
