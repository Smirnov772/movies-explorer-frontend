import { Link, Route } from "react-router-dom";
import logo from "../../images/logo.svg";
import { useLocation } from "react-router-dom";
function Header() {
  let location = useLocation();
  console.log(location.pathname);
  return (
    <header className={
      location.pathname !== "/"
        ? "header header_style_white"
        : "header"
    }>
     <Link to="/" className="header__logo logo"><img  src={logo} alt="Логотип" />{" "}</Link> 
      <nav
        className={
          location.pathname === "/movies"
            ? "header__nav header__nav_space-between"
            : "header__nav "
        }
      >
        {" "}
        <Route path="/movies">
          <ul className="header__list">
            {" "}
            <li>
              <Link to="signup" className="header__link link">
                Фильмы
              </Link>
            </li>
            <li>
              <Link to="signin" className="header__link link">
                Сохраненные фильмы
              </Link>
            </li>
          </ul>
        </Route>
        <ul className="header__list">
          <Route exact path="/">
            {" "}
            <li>
              <Link to="signup" className="header__link link">
                Регистрация
              </Link>
            </li>
            <li>
              <div>
                <Link
                  to="movies"
                  className="header__link link header__link_style-button"
                >
                  Войти
                </Link>
              </div>{" "}
            </li>
          </Route>

          <li>
            <Route path="/movies">
              <Link to="signin" className="header__link link">
                Аккаунт{" "}
                <div className="header__human-logo"></div>
                  
               
              </Link>
            </Route>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
