import darkThemeButton from '../assets/theme-icon/dark.svg';
import lightThemeButton from '../assets/theme-icon/light.svg';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Search from './Search';
import { themeContext } from '../App';

function Header() {
  const { theme, setTheme } = useContext(themeContext);
  const dispatch = useDispatch();

  function changeTheme(): void {
    switch (theme) {
      case 'light':
        setTheme('dark');
        break;
      case 'dark':
        setTheme('light');
        break;
      default:
        break;
    }
  }

  /**
   * Cart Store
   */
  const cartItemsCount = useSelector(
    (state: any) => state.cartStore.totalCount,
  );

  return (
    <nav className="navbar sticky top-0 z-10" data-theme={theme}>
      {/* 축소 시 생기는 버튼, 드랍다운으로 카테고리를 선택할 수 있습니다. */}
      <div className="dropdown dropdown-end md:hidden" id="category_drop-down">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
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
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link to="/fashion">패션</Link>
          </li>
          <li>
            <Link to="/accessory">액세서리</Link>
          </li>
          <li>
            <Link to="/digital">디지털</Link>
          </li>
        </ul>
      </div>
      {/* 로고 */}
      <div className="flex-none" id="logo">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          React Shop
        </Link>
      </div>
      {/* 카테고리 */}
      <div className="flex-none hidden md:block" id="category">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/fashion">패션</Link>
          </li>
          <li>
            <Link to="/accessory">액세서리</Link>
          </li>
          <li>
            <Link to="/digital">디지털</Link>
          </li>
        </ul>
      </div>
      {/* 빈 공간 */}
      <div className="grow" id="space"></div>
      {/* 테마 선택 */}
      <div className="mr-5 cursor-pointer flex-none" id="theme">
        {theme === 'light' ? (
          <img
            src={darkThemeButton}
            className="w-5 h-5"
            alt="다크모드"
            onClick={changeTheme}
          />
        ) : (
          <img
            src={lightThemeButton}
            className="w-5 h-5"
            alt="라이트모드"
            onClick={changeTheme}
          />
        )}
      </div>
      {/* 검색 */}
      <Search />
      {/* 장바구니 */}
      <label tabIndex={0} className="btn btn-ghost btn-circle" id="cart">
        <Link to="/cart" className="indicator">
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
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="badge badge-sm indicator-item">
            {cartItemsCount}
          </span>
        </Link>
      </label>
    </nav>
  );
}

export default Header;
