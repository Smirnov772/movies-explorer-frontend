import MoviesCard from "../MoviesCard/MoviesCard";
import mainApi from "../../../utils/MainApi";
import React from "react";
import { currentUserContext } from "../../contexts/CurrentUserContext";

function MoviesCardList(props) {
  const currentUser = React.useContext(currentUserContext);


  // const [currentUser, setCurrentUser] = useState({});

  function openTrailer(url) {
    window.open(url);
  }
  // function saveMovie(card) {
  //   console.log(card);
  //   mainApi
  //     .addMovie(card)
  //     .then((newcard) => {
  //       console.log(newcard);
  //     })

  //     .catch((err) => console.log(err));
  // }
  function handleClickChange(card){
    props.clickChange(card)
  }
  
  return (
    <section className="movies-card-list">
      { props.movieCard.map((dataMovie) => (
            <MoviesCard
              key={dataMovie.id}
              country={dataMovie.country}
              director={dataMovie.director}
              duration={dataMovie.duration}
              year={dataMovie.year}
              description={dataMovie.description}
              image={`https://api.nomoreparties.co${dataMovie.image.url}`}
              trailer={dataMovie.trailerLink}
              thumbnail={`https://api.nomoreparties.co${dataMovie.image.formats.thumbnail.url}`}
              movieId={dataMovie.id}
              nameRU={dataMovie.nameRU}
              nameEN={dataMovie.nameEN}
              clickImage={openTrailer}
              savedMovie={props.savedMovie}
              clickChange={props.clickChange}
              onCardDelete={props.onCardDelete}
            />
          ))
        }
    </section>
  );
}
export default MoviesCardList;
