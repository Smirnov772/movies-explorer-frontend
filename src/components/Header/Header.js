import { Link, Route, Switch } from "react-router-dom";
import logo from "../../images/logo.svg";
import humanLogo from "../../images/imagesheader.svg";
function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип" />{" "}
      <nav className="header__nav">
        {" "}
        <Switch>
          <Route exact path="/">
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
            <ul className="header__list">
              <li>
                <Link to="signup" className="header__link link">
                  Регистрация
                </Link>
              </li>

              <li><div>
                <Link to="signin" className="header__link link header__link_style-button">
                  Войти
                </Link>
             </div> </li>
              
              <li>
                <Link to="signin" className="header__link link">
                  Аккаунт{" "}
                  <img
                    className="header__human-logo"
                    src={humanLogo}
                    alt="Логотип"
                  />
                </Link>
              </li>
            </ul>
          </Route>
        </Switch>
      </nav>
    </header>
  );
}

export default Header;
