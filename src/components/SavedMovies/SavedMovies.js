import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import React from "react";

  
  function SavedMovies(props) {
  function handleSubmit(input) {
    props.onSubmit(input);
  }
  function handleClickMore() {
    props.handleClickMore("dataSaveMovie");
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
      delete={props.delete}
        onCardDelete={props.handleCardDelete}
        movieCard={props.movies}
        
      ></MoviesCardList>
    </section>
  )
}
export default SavedMovies;
