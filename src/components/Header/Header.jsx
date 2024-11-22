import React from 'react';
import s from './Header.module.scss';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
      <header className={s.header}>
        <div className="container">
          <nav className={s.nav}>
            <Link to={'/'} className={s.logo}>
              SHOP.CO
            </Link>

            <div className={s.menu}>
              <Link to={'/'}>shop</Link>
              <Link to={'/'}>On Sale</Link>
              <Link to={'/'}>New Arriwals</Link>
              <Link to={'/'}>Brands</Link>
            </div>
            <input className={s.search}placeholder='search...' type="text" />
            <div className={s.box}>
              <img src="/public/icon-1 (2).svg" alt="" />
              <img src="/public/icon-2 (2).svg" alt="" />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Header;

