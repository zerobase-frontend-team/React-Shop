import React, { useRef, useState } from 'react';
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
  const searchBarWhenNarrow = useRef<HTMLInputElement>(null);

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

  const toggleSearch = () => {
    searchBarWhenNarrow.current?.classList.toggle('invisible');
    searchBarWhenNarrow.current?.classList.toggle('translate-y-full');
  };

  return (
    <>
      <button
        className="btn btn-ghost btn-circle sm:hidden"
        onClick={toggleSearch}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
      <input
        onChange={onChangeHandler}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        type={'search'}
        placeholder="검색"
        className="input absolute w-full h-full rounded-none border border-slate-400 left-0 z-[-10] invisible sm:hidden transition ease-in-out duration-300"
        id="search"
        ref={searchBarWhenNarrow}
      />
      <input
        onChange={onChangeHandler}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        type={'search'}
        placeholder="검색"
        className="hidden sm:block input input-bordered w-full max-w-xs"
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
