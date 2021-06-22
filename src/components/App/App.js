// import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Register from '../Register/Register' ;
import { Route, Switch } from "react-router-dom";
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
        <>
          <Header></Header>
          <Route exact path="/">
            <Main></Main>
          </Route>
          <Route path="/movies">
            <Movies></Movies>
          </Route>
          <Route path="/saved-movies"></Route>
          <Route path="/profile"></Route>
          <Footer></Footer>
        </>
      </Switch>
      <> </>
    </>
  );
}

export default App;
