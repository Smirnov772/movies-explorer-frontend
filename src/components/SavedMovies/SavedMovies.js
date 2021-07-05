import MoviesCardList from "./MoviesCardList/MoviesCardList";
import mainApi from "../../utils/MainApi";
import React, { useEffect, useState } from "react";
import { currentUserContext } from "../contexts/CurrentUserContext";


function Movies(props) {
  const currentUser = React.useContext(currentUserContext);
  // const [movieCard, setMovieCard] = useState([]);
  // useEffect(() => {
  //   mainApi
  //   .getMeMovies()
  //   .then((dataCard) => {
  //     localStorage.setItem("saveDataCard", JSON.stringify(dataCard.filter((i) => i.owner === currentUser._id )))
  //     // setMovieCard(dataCard.filter((i) => i.owner === currentUser._id ));
  //     const saveDataMovie = JSON.parse(localStorage.getItem("saveDataCard"));
  //       setMovieCard(saveDataMovie)
  //       console.log(saveDataMovie);


  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  
  // function handleCardDelete(deletedCard) {
  //   console.log(deletedCard);
  //   mainApi
  //     .removeCard(deletedCard._id)
  //     .then(() => {
  //       localStorage.setItem("saveDataCard", JSON.stringify(movieCard.filter((i) => i._id !== deletedCard._id)))
  //       const deleteDataMovie = JSON.parse(localStorage.getItem("saveDataCard"));
  //       console.log(deleteDataMovie);
  //       setMovieCard(deleteDataMovie);
  //     })
  //     .catch((err) => console.log(err));
  // }

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
