import { Link } from "react-router-dom";
import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";
import logo from "../../images/logo.svg";
import { useLocation } from "react-router-dom";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
function Header() {
  //   function toggleBurgerMenu(e) {
  //     console.log(e);

  //  e.target.classList.toggle("burger__button_active");
  // }
  const [toggleBurgerMenu, setToggleBurgerMenu] = useState(false);
  function BurgerMenuClick() {
    toggleBurgerMenu === false
      ? setToggleBurgerMenu(true)
      : setToggleBurgerMenu(false);
  }
  function closeBurgerMenu() {
    setToggleBurgerMenu(false)
  }
  console.log(toggleBurgerMenu);
  let location = useLocation();
  console.log(location.pathname);
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
        onClick={BurgerMenuClick}
        toggle={toggleBurgerMenu}
      ></BurgerMenu>
      <Navigation
        handlerBurgerMenu={toggleBurgerMenu}
        clickLink = {closeBurgerMenu}
      ></Navigation>
    </header>
  );
}

export default Header;
