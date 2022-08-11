import darkThemeButton from '../assets/dark.svg';
import lightThemeButton from '../assets/light.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [theme, setTheme] = useState('light');

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

  return (
    <nav className="navbar" data-theme={theme}>
      <div className="dropdown md:hidden">
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
      <div className="flex-none">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          React Shop
        </Link>
      </div>
      <div className="flex-none hidden md:block">
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
      <div className="space grow"></div>
      <div className="theme-mode mr-5 cursor-pointer flex-none">
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
      <input
        type={'search'}
        placeholder="검색"
        className="input input-bordered w-full max-w-xs"
      />
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
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
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </label>
    </nav>
  );
}

export default Header;
