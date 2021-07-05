import { Route, Switch, useHistory} from "react-router-dom";
import React, { useEffect, useState, prevState } from "react";
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
import { currentUserContext } from "../contexts/CurrentUserContext";
import "./App.css";

function App() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [filterMovies, setFilterMovies] = useState([]);
  const [oldData, setOldData] = useState("");
  const [moviesCards, setMoviesCards] = useState("");
  const [savedMovie, setSavedMovie] = useState([]);
  const dataCard = JSON.parse(localStorage.getItem("dataCard"));
  const dataFilter = JSON.parse(localStorage.getItem("datafilter"));
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
      history.push("/");
    }
  }, [history, loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getMeMovies()
        .then((dataCard) => {
          localStorage.setItem(
            "dataSaveMovie",
            JSON.stringify(dataCard.filter((i) => i.owner === currentUser._id))
          );
          setSavedMovie(dataCard.filter((i) => i.owner === currentUser._id));
          setCurrentUser([dataCard, ...currentUser]);
          // setMovieCard(dataCard.filter((i) => i.owner === currentUser._id ));
          // const saveDataMovie = JSON.parse(
          //   localStorage.getItem("dataSaveMovie")
          // );
          // setMovieCard(saveDataMovie)
          // console.log(saveDataMovie);
        })
        .catch((err) => console.log(err));
    }
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      moviesApi
        .getMovies()
        .then((dataCard) => {
          localStorage.setItem("dataCard", JSON.stringify(dataCard));
        })

        .catch((err) => console.log(err));
    }
  }, [loggedIn]);
  // useEffect(() => {
  //   setMoviesCards(filterMovies)
  // }, [filterMovies]);

  function imputSearch(input) {
    // localStorage.setItem(
    //   "datafilter",
    //   JSON.stringify(
    //     dataCard.filter((item) => {
    //       if (input === "") {
    //         return item;
    //       } else if (item.nameRU.toLowerCase().includes(input.toLowerCase())) {
    //         return item;
    //       }
    //     })
    //   )
    // );
    
    setFilterMovies(
      dataCard.filter((item) => {
        if (input === "") {
          return "";
        } else if (item.nameRU.toLowerCase().includes(input.toLowerCase()))  {
          return item;
        }
      })
    );

    // setInputSearch(input);
  }

  function handleClickChange(card) {
    const isClick = savedMovie.some((i) => i.movieId === card.movieId);
    isClick ? handleCardDelete(card) : saveMovie(card);

    // if (checkLike === true) {
    //   setCheckLike(false);
    //   handleCardDelete(card);
    // } else {
    //   setCheckLike(true);
    //   saveMovie(card);
    // }
  }
  //   function handleCardLike(card) {
  //     const isLiked = card.likes.some((i) => i === currentUser._id);
  //    console.log(card.likes===currentUser._id);
  //    api
  //      .changeLikeCardStatus(card._id, !isLiked)
  //      .then((newCard) => {
  //        setCards((state) =>
  //          state.map((c) => (c._id === card._id ? newCard : c))
  //        );
  //      })
  //      .catch((err) => console.log(err));
  //  }
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

  function handleCardDelete(deletedCard) {
    const [delet] = savedMovie.filter((i) => i.movieId === deletedCard.movieId);
    mainApi
      .removeCard(delet._id)
      .then((newCard) => {
        
        setSavedMovie(savedMovie.filter((i) => i._id !== newCard._id));
        console.log("removeCard");
      })
      .catch((err) => console.log(err));
  }
  function saveMovie(card) {
    console.log(card);
    mainApi
      .addMovie(card)
      .then((newcard) => {
        setSavedMovie([newcard, ...savedMovie]);
        console.log("saveCard");
      })

      .catch((err) => console.log(err));
  }
  const [changeCheckbox, setChangeCheckbox] = useState(false);
  const soldCheckbox = ({ target: { checked } }) => {
    setChangeCheckbox(checked);
    if (checked) {
      setOldData(filterMovies)
      setFilterMovies(filterMovies.filter((i) => i.duration < 40));
    } else {
      setFilterMovies(oldData);
    }
  };
  console.log(changeCheckbox);

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
            onChange={soldCheckbox}
            component={Movies}
            onSubmit={imputSearch}
            movies={filterMovies}
            savedMovie={savedMovie}
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
