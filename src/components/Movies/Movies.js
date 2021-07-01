import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "./Preloader/Preloader";
import SearchForm from "./SearchForm/SearchForm";
import movieApi from  '../../utils/MoviesApi' ;
import React, { useEffect, useState } from "react";
function Movies() {
  const [movieCard, setMovieCard] = useState([]);
  useEffect(() => {
    movieApi
      .getMovies()
      .then((dataCard) => {
        setMovieCard(dataCard);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(movieApi.url);
  return (
    <section className="movies">
      <SearchForm></SearchForm>
      <MoviesCardList movieCard={movieCard}>
      
      </MoviesCardList>
      <Preloader></Preloader>
    </section>
  );
}
export default Movies;
