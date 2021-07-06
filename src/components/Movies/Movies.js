import MoviesCardList from "./MoviesCardList/MoviesCardList";

import SearchForm from "./SearchForm/SearchForm";
import React from "react";

function Movies(props) {
  function handleSubmit(input) {
    props.onSubmit(input);
  }

  return (
    <section className="movies">
      <SearchForm
        onSubmit={handleSubmit}
        onChange={props.onChange}
      ></SearchForm>

      <MoviesCardList
        сhangeMoreButton={props.сhangeMoreButton}
        handleClickMore={props.handleClickMore}
        preloaderChange={props.preloaderChange}
        savedMovie={props.savedMovie}
        onCardDelete={props.handleCardDelete}
        movieCard={props.movies}
        clickChange={props.clickChange}
      ></MoviesCardList>
    </section>
  );
}
export default Movies;
