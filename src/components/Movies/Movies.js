import MoviesCardList from "./MoviesCardList/MoviesCardList";

import SearchForm from "./SearchForm/SearchForm";
import React from "react";

function Movies(props) {
  function handleSubmit(input) {
    props.onSubmit(input);
  }
 
    function handleClickMore() {
      props.handleClickMore("dataCard");
    }

  return (
    <section className="movies">
      <SearchForm
        onSubmit={handleSubmit}
        onChange={props.onChange}
      ></SearchForm>

      <MoviesCardList
        сhangeMoreButton={props.сhangeMoreButton}
        handleClickMore={handleClickMore}
        сhangeNotMovie={props.сhangeNotMovie}
        savedMovie={props.savedMovie}
        onCardDelete={props.handleCardDelete}
        movieCard={props.movies}
        clickChange={props.clickChange}
      ></MoviesCardList>
    </section>
  );
}
export default Movies;
