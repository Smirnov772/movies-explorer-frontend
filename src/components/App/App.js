import { Route, Switch, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import apiAuth from "../../utils/apiAuth";
import mainApi from "../../utils/MainApi";
import ProtectedRoute from "../ProtectedRoute";
import { currentUserContext } from "../contexts/CurrentUserContext";
import "./App.css";

function App() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  function checkToken() {
    const jwt = localStorage.getItem("JWT");
    if (jwt) {
      apiAuth
        .JWTValid(jwt)
        .then((res) => {
          setLoggedIn(true);
          console.log(`true ${jwt}`);
        })
        .catch(() => {
          localStorage.removeItem("JWT");
        });
    }
  }
  useEffect(() => {
    checkToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getUserInfo()
        .then((dataUser) => {
          setCurrentUser(dataUser);
        })
        .catch((err) => console.log(err));
      history.push("/");
    }
  }, [history, loggedIn]);


  function userRegister(input) {
    apiAuth
      .register(input.name, input.email, input.password)
      .then((res) => {
        localStorage.setItem("JWT", res.token);
        setLoggedIn(true);
        history.push("/movies");
        return;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function userAuthorize(input) {
    apiAuth
      .authorize(input.password, input.email)
      .then((data) => {
        setCurrentUser({ ...currentUser, email: input.email });
        localStorage.setItem("JWT", data.token);
        setLoggedIn(true);
        history.push("/movies");
        console.log(data);

        return;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function userRemove() {
    localStorage.removeItem("JWT");
    history.push("/");
    setLoggedIn(false);
    setCurrentUser("");
  }
  return (
    <currentUserContext.Provider value={currentUser}>
      <Switch>
        <Route path="/signup">
          <Register onSubmit={userRegister}> </Register>
        </Route>
        <Route path="/signin">
          <Login onSubmit={userAuthorize}> </Login>
        </Route>

        {/* <Route></Route> */}

        <Route path="/movies">
          <Header loggedIn={loggedIn}></Header>
          <ProtectedRoute
            loggedIn={loggedIn}
            path="/movies"
            component={Movies}
          ></ProtectedRoute>
          <Footer></Footer>
        </Route>
        <Route path="/saved-movies">
          <Header loggedIn={loggedIn}></Header>
          <ProtectedRoute
            loggedIn={loggedIn}
            path="/saved-movies"
            component={SavedMovies}
          ></ProtectedRoute>
          <Footer></Footer>
        </Route>

        <Route path="/profile">
          <Header loggedIn={loggedIn}></Header>
          <ProtectedRoute
            loggedOut={userRemove}
            loggedIn={loggedIn}
            path="/profile"
            component={Profile}
          ></ProtectedRoute>
        </Route>

        <Route exact path="/">
          <Header loggedIn={loggedIn}></Header>
          <Main></Main>
          <Footer></Footer>
        </Route>

        <Route path="*">
          <NotFoundPage> </NotFoundPage>
        </Route>
      </Switch>
    </currentUserContext.Provider>
  );
}

export default App;
