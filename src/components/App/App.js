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
import moviesApi from "../../utils/MoviesApi";
import ProtectedRoute from "../ProtectedRoute";
import Preloader from "../Preloader/Preloader";
import InfoTooltip from "../InfiTooltip/InfoTooltip";
import { currentUserContext } from "../contexts/CurrentUserContext";
import "./App.css";

function App() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [filterMovies, setFilterMovies] = useState([]);
  const [oldData, setOldData] = useState([]);
  const [moviesCardsArray, setMoviesCardsArray] = useState([]);
  const [savedMovie, setSavedMovie] = useState([]);
  const [Movie, setMovie] = useState([]);
  const dataCard = JSON.parse(localStorage.getItem("dataCard"));

  // const dataFilter = JSON.parse(localStorage.getItem("datafilter"));
  const dataSaveMovie = JSON.parse(localStorage.getItem("dataSaveMovie"));

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
    }
  }, [history, loggedIn]);

  function searchMeMovies(input) {
    if (loggedIn) {
      setPreloaderChange(true);
      mainApi
        .getMeMovies()
        .then((dataCard) => {
          const currentDataCard = dataCard.filter(
            (i) => i.owner === currentUser._id
          );
          setPreloaderChange(false);

          localStorage.setItem(
            "dataSaveMovie",
            JSON.stringify(currentDataCard)
          );
          // );
          setSavedMovie(currentDataCard);

          //  localStorage.setItem("dataCard", JSON.stringify(dataCard));
          const movieFilter = currentDataCard.filter((item) => {
            if (input === "") {
              return "";
            } else if (
              item.nameRU.toLowerCase().includes(input.toLowerCase())
            ) {
              return item;
            }
            return;
          });
          function widthArrray() {
            if (window.innerWidth <= 480) {
              return 5;
            } else if (window.innerWidth > 480 && window.innerWidth < 1200) {
              return 8;
            }
            return 12;
          }
          const array = widthArrray();
          localStorage.setItem(
            "dataSaveMovie",
            JSON.stringify(movieFilter.slice(0, array))
          );
          setMoviesCardsArray(movieFilter.slice(0, array));
          setFilterMovies(movieFilter);
          checkMoreButtom(movieFilter.length, array);
          setChangeNotMovie(true);
          console.log(movieFilter.length);

          setTimeout(() => setChangeNotMovie(true), 3000);
        })
        .catch((err) => console.log(err));
    }
  }

  // useEffect(() => {
  //   if (loggedIn) {
  //     setPreloaderChange(true);
  //     moviesApi
  //       .getMovies()
  //       .then((dataCard) => {
  //         setPreloaderChange(false);
  //        localStorage.setItem("dataCard", JSON.stringify(dataCard));
  //       })

  //       .catch((err) => console.log(err));
  //   }
  // }, [loggedIn]);

  function searchMovies(input) {
    if (loggedIn) {
      setPreloaderChange(true);
      moviesApi
        .getMovies()
        .then((dataCard) => {
          setPreloaderChange(false);
          // localStorage.setItem("dataCard", JSON.stringify(dataCard));
          setMovie(dataCard);
          const movieFilter = dataCard.filter((item) => {
            if (input === "") {
              return "";
            } else if (
              item.nameRU.toLowerCase().includes(input.toLowerCase())
            ) {
              return item;
            }
            return;
          });
          function widthArrray() {
            if (window.innerWidth <= 480) {
              return 5;
            } else if (window.innerWidth > 480 && window.innerWidth < 1200) {
              return 8;
            }
            return 12;
          }
          const array = widthArrray();
          localStorage.setItem(
            "dataCard",
            JSON.stringify(movieFilter.slice(0, array))
          );
          setMoviesCardsArray(movieFilter.slice(0, array));
          setFilterMovies(movieFilter);
          checkMoreButtom(movieFilter.length, array);
          setChangeNotMovie(true);
          console.log(movieFilter);

          setTimeout(() => setChangeNotMovie(true), 3000);
        })

        .catch((err) => console.log(err));
    }
  }

  const [сhangeMoreButton, setChangeMoreButton] = useState(false);
  const [сhangeNotMovie, setChangeNotMovie] = useState(false);

  function getMoreMovies(dataCard) {
    function widthArrray() {
      if (window.innerWidth < 1200) {
        return 2;
      }
      return 3;
    }
    const array = widthArrray();
    localStorage.setItem(
      `${dataCard}`,
      JSON.stringify(filterMovies.slice(0, moviesCardsArray.length + array))
    );
    setMoviesCardsArray(filterMovies.slice(0, moviesCardsArray.length + array));
    checkMoreButtom(
      filterMovies.length + array,
      moviesCardsArray.length + array
    );
  }

  function checkMoreButtom(movie, ArrayLength) {
    if (movie - 2 >= ArrayLength) setChangeMoreButton(true);
    else setChangeMoreButton(false);
  }
  function handleClickChange(card) {
    const isClick = savedMovie.some((i) => i.movieId === card.movieId);
    isClick ? handleCardDelete(card) : saveMovie(card);
  }

  const soldCheckbox = ({ target: { checked } }) => {
    if (checked) {
      setOldData(filterMovies);
      setMoviesCardsArray(filterMovies.filter((i) => i.duration < 40));

      localStorage.setItem(
        "dataCard",
        JSON.stringify(dataCard.filter((i) => i.duration < 40))
      );

      setChangeNotMovie(true);
      setTimeout(() => setChangeNotMovie(true), 3000);
    } else {
      setMoviesCardsArray(oldData);
      localStorage.setItem("dataCard", JSON.stringify(oldData));
    }
  };
  const soldCheckboxMe = ({ target: { checked } }) => {
    if (checked) {
      setOldData(filterMovies);
      setMoviesCardsArray(filterMovies.filter((i) => i.duration < 40));

      localStorage.setItem(
        "dataSaveMovie",
        JSON.stringify(dataSaveMovie.filter((i) => i.duration < 40))
      );

      setChangeNotMovie(true);
      setTimeout(() => setChangeNotMovie(true), 3000);
    } else {
      setMoviesCardsArray(oldData);
      localStorage.setItem("dataSaveMovie", JSON.stringify(oldData));
    }
  };
  function userRegister(input) {
    setPreloaderChange(true);
    apiAuth
      .register(input.name, input.email, input.password)
      .then((res) => {
        setPreloaderChange(false);
        userAuthorize(input);
      })
      .catch((err) => {
        console.log(err);
        setIsInfoTooltipStatus(false);
        setIsInfoTooltipOpen(true);
        setTimeout(() => {
          setIsInfoTooltipOpen(false);
        }, 1000);
      });
  }

  function userAuthorize(input) {
    setPreloaderChange(true);
    apiAuth
      .authorize(input.password, input.email)
      .then((data) => {
        setPreloaderChange(false);

        setCurrentUser({ ...currentUser, email: input.email });
        localStorage.setItem("JWT", data.token);
        setLoggedIn(true);
        setIsInfoTooltipStatus(true);
        setIsInfoTooltipOpen(true);
        setTimeout(() => {
          setIsInfoTooltipOpen(false);
        }, 1000);
        history.push("/movies");
        console.log(data);

        return;
      })
      .catch((err) => {
        console.log(err);
        setIsInfoTooltipStatus(false);
        setIsInfoTooltipOpen(true);
        setTimeout(() => {
          setIsInfoTooltipOpen(false);
        }, 1000);
      });
  }
  function handleUpdateUser(dataUser) {
    console.log(dataUser);
    setPreloaderChange(true);
    mainApi
      .renameUser(dataUser.name, dataUser.email)
      .then((dataUser) => {
        setPreloaderChange(false);
        setIsInfoTooltipStatus(true);
        setIsInfoTooltipOpen(true);
        setCurrentUser(dataUser);
        setTimeout(() => {
          setIsInfoTooltipOpen(false);
        }, 1000);
      })
      .catch((err) => console.log(err));
    setIsInfoTooltipStatus(false);
    setCurrentUser(dataUser);
    setTimeout(() => {
      setIsInfoTooltipOpen(false);
    }, 1000);
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
    console.log(savedMovie);
    console.log(delet);

    mainApi
      .removeCard(delet._id)
      .then((newCard) => {
        localStorage.setItem(
          "dataSaveMovie",
          JSON.stringify(dataSaveMovie.filter((i) => i._id !== newCard._id))
        );
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

  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const [isInfoTooltipStatus, setIsInfoTooltipStatus] = React.useState(false);
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
            сhangeNotMovie={сhangeNotMovie}
            сhangeMoreButton={сhangeMoreButton}
            handleClickMore={getMoreMovies}
            loggedIn={loggedIn}
            path="/movies"
            onChange={soldCheckbox}
            component={Movies}
            onSubmit={searchMovies}
            movies={moviesCardsArray == 0 ? dataCard : moviesCardsArray}
            savedMovie={savedMovie}
            preloaderChange={preloaderChange}
            clickChange={handleClickChange}
          ></ProtectedRoute>
          <Footer></Footer>
        </Route>
        <Route path="/saved-movies">
          <Header loggedIn={loggedIn}></Header>
          <ProtectedRoute
            сhangeNotMovie={сhangeNotMovie}
            сhangeMoreButton={сhangeMoreButton}
            handleClickMore={getMoreMovies}
            onChange={soldCheckboxMe}
            onSubmit={searchMeMovies}
            preloaderChange={preloaderChange}
            handleCardDelete={handleCardDelete}
            movies={Movie == 0 ? dataSaveMovie : Movie}
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
      <InfoTooltip loggedIn={isInfoTooltipStatus} isOpen={isInfoTooltipOpen} />
    </currentUserContext.Provider>
  );
}

export default App;
