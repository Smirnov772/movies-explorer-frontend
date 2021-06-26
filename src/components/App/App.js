// import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import { Route, Switch, } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Switch>
        <Route path="/signup">
          <Register> </Register>
        </Route>
        <Route path="/signin">
          <Login> </Login>
        </Route>

        {/* <Route></Route> */}

        <Route path="/movies">
          <Header></Header>
          <Movies></Movies>
          <Footer></Footer>
        </Route>
        <Route path="/saved-movies">
          <Header></Header>
          <SavedMovies></SavedMovies>
          <Footer></Footer>
        </Route>

        <Route path="/profile">
          <Header></Header>
          <Profile></Profile>
        </Route>

        <Route exact path="/">
          <Header></Header>
          <Main></Main>
          <Footer></Footer>
        </Route>

        <Route path="*">
          <NotFoundPage> </NotFoundPage>
        </Route>
      </Switch>
    </>
  );
}

export default App;
