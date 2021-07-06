import { Route, Switch, useHistory } from "react-router-dom";
import React, { useEffect, useState} from "react";
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
import moviesApi from "../../utils/MoviesApi";
import ProtectedRoute from "../ProtectedRoute";
import Preloader from "../Preloader/Preloader";
import { currentUserContext } from "../contexts/CurrentUserContext";
import "./App.css";

function App() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [filterMovies, setFilterMovies] = useState([]);
  const [oldData, setOldData] = useState("");
  const [moviesCardsArray, setMoviesCardsArray] = useState([]);
  const [savedMovie, setSavedMovie] = useState([]);
  const dataCard = JSON.parse(localStorage.getItem("dataCard"));
  // const dataFilter = JSON.parse(localStorage.getItem("datafilter"));
  // const dataSaveMovie = JSON.parse(localStorage.getItem("dataSaveMovie"));

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
  }, [loggedIn]);

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

  useEffect(() => {
    if (loggedIn) {
      setPreloaderChange(true);
      mainApi
        .getMeMovies()
        .then((dataCard) => {
          localStorage.setItem(
            "dataSaveMovie",
            JSON.stringify(dataCard.filter((i) => i.owner === currentUser._id))
          );
          setSavedMovie(dataCard.filter((i) => i.owner === currentUser._id));
          setPreloaderChange(false);
        })
        .catch((err) => console.log(err));
    }
  }, [currentUser._id, loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      setPreloaderChange(true);
      moviesApi
        .getMovies()
        .then((dataCard) => {
          setPreloaderChange(false);
          localStorage.setItem("dataCard", JSON.stringify(dataCard));
        })

        .catch((err) => console.log(err));
    }
  }, [loggedIn]);

  function imputSearch(input) {
    const searchMovie = dataCard.filter((item) => {
      if (input === "") {
        return "";
      } else if (item.nameRU.toLowerCase().includes(input.toLowerCase())) {
        return item;
      }  return "";
    });
    function widthArrray() {
      if (window.innerWidth <= 480) {
        return 5;
      } else if (window.innerWidth > 480 && window.innerWidth < 1200) {
        return 8;
      }
        return 12;
      
    }
    const array = widthArrray()
    console.log(array);
    setMoviesCardsArray(searchMovie.slice(0, array));
    setFilterMovies(searchMovie);
    setChangeMoreButton(true);
  }

  const [сhangeMoreButton, setChangeMoreButton] = useState(true);

  function getMoreMovies() {
    function widthArrray() {
       if ( window.innerWidth < 1200) {
        return 2;
      }
        return 3;
      
    }
    const array = widthArrray()
    setMoviesCardsArray(filterMovies.slice(0, moviesCardsArray.length + array));
    checkMoreButtom(moviesCardsArray.length + array);
    console.log(moviesCardsArray.length + array);
    console.log(filterMovies.length);
  }

  function checkMoreButtom(moviesCardsArrayLength) {
    if (filterMovies.length - 1 >= moviesCardsArrayLength)
      setChangeMoreButton(true);
    else setChangeMoreButton(false);
  }
  function handleClickChange(card) {
    const isClick = savedMovie.some((i) => i.movieId === card.movieId);
    isClick ? handleCardDelete(card) : saveMovie(card);
  }
  function userRegister(input) {
    setPreloaderChange(true);
    apiAuth
      .register(input.name, input.email, input.password)
      .then((res) => {
        setPreloaderChange(false);
        localStorage.setItem("JWT", res.token);
        history.push("/signin");
        return;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function userAuthorize(input) {
    setPreloaderChange(true);
    apiAuth
      .authorize(input.password, input.email)
      .then((data) => {
        setCurrentUser({ ...currentUser, email: input.email });
        localStorage.setItem("JWT", data.token);
        setLoggedIn(true);
        history.push("/movies");
        setPreloaderChange(false);
        console.log(data);

        return;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleUpdateUser(dataUser) {
    console.log(dataUser);
    mainApi
      .renameUser(dataUser.name, dataUser.email)
      .then((dataUser) => {
        setCurrentUser(dataUser);
      })
      .catch((err) => console.log(err));
 
  }
  function userRemove() {
    localStorage.removeItem("JWT");
    history.push("/");
    setLoggedIn(false);
    setCurrentUser("");
    setSavedMovie("");
    setFilterMovies("");
  }

  function handleCardDelete(deletedCard) {
    const [delet] = savedMovie.filter((i) => i.movieId === deletedCard.movieId);
    setPreloaderChange(true);
    mainApi
      .removeCard(delet._id)
      .then((newCard) => {
        setSavedMovie(savedMovie.filter((i) => i._id !== newCard._id));
        setPreloaderChange(false);
        console.log("removeCard");
      })
      .catch((err) => console.log(err));
  }
  function saveMovie(card) {
    setPreloaderChange(true);
    console.log(card);
    mainApi
      .addMovie(card)
      .then((newcard) => {
        setSavedMovie([newcard, ...savedMovie]);
        setPreloaderChange(false);
        console.log("saveCard");
      })

      .catch((err) => console.log(err));
  }
  const [changeCheckbox, setChangeCheckbox] = useState(false);
  const soldCheckbox = ({ target: { checked } }) => {
    setChangeCheckbox(checked);
    if (checked) {
      setOldData(moviesCardsArray);
      setMoviesCardsArray(moviesCardsArray.filter((i) => i.duration < 40));
    } else {
      setMoviesCardsArray(oldData);
    }
  }; 
  console.log(changeCheckbox);
  const [preloaderChange, setPreloaderChange] = useState(false);
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
            сhangeMoreButton={сhangeMoreButton}
            handleClickMore={getMoreMovies}
            loggedIn={loggedIn}
            path="/movies"
            onChange={soldCheckbox}
            component={Movies}
            onSubmit={imputSearch}
            movies={moviesCardsArray}
            savedMovie={savedMovie}
            preloaderChange={preloaderChange}
            clickChange={handleClickChange}
          ></ProtectedRoute>
          <Footer></Footer>
        </Route>
        <Route path="/saved-movies">
          <Header loggedIn={loggedIn}></Header>
          <ProtectedRoute
            handleCardDelete={handleCardDelete}
            movies={savedMovie}
            loggedIn={loggedIn}
            path="/saved-movies"
            component={SavedMovies}
          ></ProtectedRoute>
          <Footer></Footer>
        </Route>

        <Route path="/profile">
          <Header loggedIn={loggedIn}></Header>
          <ProtectedRoute
          onUpdateUser={handleUpdateUser}
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
      <Preloader change={preloaderChange}></Preloader>
    </currentUserContext.Provider>
  );
}

export default App;
