import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "./Preloader/Preloader";
import SearchForm from "./SearchForm/SearchForm";
import movieApi from "../../utils/MoviesApi";
import React, { useState } from "react";
function Movies() {
  const [movieCard, setMovieCard] = useState([]);
  function getMovies() {
    movieApi
      .getMovies()
      .then((dataCard) => {
        setMovieCard(dataCard);
      })
      .catch((err) => console.log(err));
  }
  return (
    <section className="movies">
      <SearchForm handleClick={getMovies}></SearchForm>
      <MoviesCardList movieCard={movieCard}></MoviesCardList>
      <Preloader></Preloader>
    </section>
  );
}
export default Movies;
