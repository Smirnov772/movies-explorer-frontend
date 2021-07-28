import { Link, Route } from "react-router-dom";
function Navigation(props) {
  return (
    <Route>
      {" "}
      <nav
        className={
          props.handlerBurgerMenu === true
            ? "header__nav header__nav_active"
            : props.loggedIn === true
            ? "header__nav header__nav_space-between"
            : "header__nav"
        }
      >
        <Route>
          {() =>
            props.loggedIn === true ? (
              <>
                <ul className="header__list ">
                  {props.handlerBurgerMenu === true ? (
                    <li>
                      <Link
                        to="/"
                        onClick={props.clickLink}
                        className="header__link link"
                      >
                        Главная
                      </Link>
                    </li>
                  ) : (
                    ""
                  )}
                  <li>
                    <Link
                      to="movies"
                      onClick={props.clickLink}
                      className="header__link link"
                    >
                      Фильмы
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="saved-movies"
                      onClick={props.clickLink}
                      className="header__link link"
                    >
                      Сохраненные фильмы
                    </Link>
                  </li>
                </ul>

                <Link
                  to="profile"
                  onClick={props.clickLink}
                  className="header__link link"
                >
                  Аккаунт <div className="header__human-logo"></div>
                </Link>
              </>
            ) : (
              <ul className="header__list">
                <Route path="/">
                  {" "}
                  <li>
                    <Link
                      to="signup"
                      onClick={props.clickLink}
                      className="header__link link"
                    >
                      Регистрация
                    </Link>
                  </li>
                  <li>
                    <div>
                      <Link
                        to="signin"
                        onClick={props.clickLink}
                        className="header__link link header__link_style-button"
                      >
                        Войти
                      </Link>
                    </div>{" "}
                  </li>
                </Route>
              </ul>
            )
          }
        </Route>
      </nav>
    </Route>
  );
}
export default Navigation;
