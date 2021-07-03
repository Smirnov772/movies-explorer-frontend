import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "./Preloader/Preloader";
import SearchForm from "./SearchForm/SearchForm";
import movieApi from "../../utils/MoviesApi";
import React, { useState, useEffect } from "react";
function Movies() {
  const [moviesCard, setMoviesCard] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);

  useEffect(() => {
    movieApi
      .getMovies()
      .then((dataCard) => setMoviesCard(dataCard))

      .catch((err) => console.log(err));
  }, []);

  function imputSearch(input) {
    const filter = moviesCard.filter((item) => {
      if (input == "") {
        return item;
      } else if (item.nameRU.toLowerCase().includes(input.toLowerCase())) {
        return item;
      }
    });
    setFilterMovies(filter);
  }

  return (
    <section className="movies">
      <SearchForm onSubmit={imputSearch}></SearchForm>
      <MoviesCardList movieCard={filterMovies}></MoviesCardList>
      <Preloader></Preloader>
    </section>
  );
}
export default Movies;
