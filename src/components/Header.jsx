import React from "react";
import { Link } from "react-router-dom";
import style from './Header.module.css'

const Header = () => {
  return (
    <header className={style.header}>
      <h2 className={style.navtitle}>Devmountain Eatery</h2>
      <nav>
        <Link to="/">
          <button className={style.navbtn}>Home</button>
        </Link>
        <Link to="/newrecipe">
          <button className={style.navbtn}>Add Recipe</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
