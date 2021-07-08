import { Link } from "react-router-dom";
import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";
import logo from "../../images/logo.svg";
import { useLocation } from "react-router-dom";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
function Header(props) {

  const [toggleBurgerMenu, setToggleBurgerMenu] = useState(false);
  function BurgerMenuToggle() {
    toggleBurgerMenu === false
      ? setToggleBurgerMenu(true)
      : setToggleBurgerMenu(false);
  }
  function BurgerMenuClose() {
    setToggleBurgerMenu(false);
  }

  let location = useLocation();

  return (
    <header
      className={
        location.pathname !== "/" ? "header header_style_white" : "header"
      }
    >
      <Link to="/" className="header__logo logo">
        <img src={logo} alt="Логотип" />{" "}
      </Link>
      <BurgerMenu
        onClick={BurgerMenuToggle}
        toggle={toggleBurgerMenu}
      ></BurgerMenu>
      <Navigation
        loggedIn={props.loggedIn}
        handlerBurgerMenu={toggleBurgerMenu}
        clickLink={BurgerMenuClose}
      ></Navigation>
    </header>
  );
}

export default Header;
