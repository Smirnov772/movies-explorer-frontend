import MoviesCardList from "./MoviesCardList/MoviesCardList";

import React from "react";




function Movies(props) {


  return (
    <section className="movies">
      <MoviesCardList
      delete={props.delete}
        onCardDelete={props.handleCardDelete}
        movieCard={props.movies}
      ></MoviesCardList>
    </section>
  );
}
export default Movies;
