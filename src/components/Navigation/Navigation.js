import { Link, Route, useLocation} from "react-router-dom";
function Navigation() {
  let location = useLocation();
  console.log(location.pathname);
  return (
    <>
      {" "}
      <nav
        className={
          location.pathname !== "/"
            ? "header__nav header__nav_space-between"
            : "header__nav"
        }
      >
        <Route>
          {() =>
            location.pathname !== "/" ? (
              <ul className="header__list">
                {" "}
                <li>
                  <Link to="movies" className="header__link link">
                    Фильмы
                  </Link>
                </li>
                <li>
                  <Link to="saved-movies" className="header__link link">
                    Сохраненные фильмы
                  </Link>
                </li>
              </ul>
            ) : (
              ""
            )
          }
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
                  to="signin"
                  className="header__link link header__link_style-button"
                >
                  Войти
                </Link>
              </div>{" "}
            </li>
          </Route>

          <li>
            <Route>
              {() =>
                location.pathname !== "/" ? (
                  <Link to="profile" className="header__link link">
                    Аккаунт <div className="header__human-logo"></div>
                  </Link>
                ) : (
                  ""
                )
              }
            </Route>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Navigation;
