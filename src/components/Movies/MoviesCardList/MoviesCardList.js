import MoviesCard from "../MoviesCard/MoviesCard";

import React from "react";

import Preloader from "../../Preloader/Preloader";

function MoviesCardList(props) {
  function openTrailer(url) {
    window.open(url);
  }

  return (
    <>
      {" "}
      {props.preloaderChange ? (
        <Preloader change={props.preloaderChange}></Preloader>
      ) : (
        ""
      )}
      <section className="movies-card-list">
        {props.movieCard.map((dataMovie) => (
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
        ))}
      </section>
      <section className="more">
        <button
          onClick={props.handleClickMore}
          className={
            props.сhangeMoreButton
              ? "more__button"
              : "more__button more_active_none"
          }
        >
          Еще
        </button>
      </section>
    </>
  );
}
export default MoviesCardList;
