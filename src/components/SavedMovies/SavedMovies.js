import MoviesCardList from "./MoviesCardList/MoviesCardList";
import mainApi from "../../utils/MainApi";
import React, { useEffect, useState } from "react";
import { currentUserContext } from "../contexts/CurrentUserContext";


function Movies() {
  const currentUser = React.useContext(currentUserContext);
  const [movieCard, setMovieCard] = useState([]);
  useEffect(() => {
    mainApi
      .getMeMovies()
      .then((dataCard) => {
        setMovieCard(dataCard.filter((i) => i.owner=== currentUser._id ));
      })
      .catch((err) => console.log(err));
  }, []);
  function handleCardDelete(deletedCard) {
    console.log(deletedCard);
    mainApi
      .removeCard(deletedCard._id)
      .then(() => {
        setMovieCard(movieCard.filter((i) => i._id !== deletedCard._id));
      })
      .catch((err) => console.log(err));
  }

  return (
    <section className="movies">
      <MoviesCardList
        onCardDelete={handleCardDelete}
        movieCard={movieCard}
      ></MoviesCardList>
    </section>
  );
}
export default Movies;
