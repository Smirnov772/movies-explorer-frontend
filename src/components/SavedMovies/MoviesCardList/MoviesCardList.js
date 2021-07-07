import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  function openTrailer(url) {
    window.open(url);
  }

  return (
    <>
      {props.movieCard.length > 0 ? (
        <>
          <section className="movies-card-list">
            {props.movieCard.map((item) => (
              <MoviesCard
                key={item._id}
                _id={item._id}
                movieId={item.movieId}
                image={item.image}
                trailer={item.trailer}
                duration={item.duration}
                nameRU={item.nameRU}
                ownerId={item.owner}
                clickImage={openTrailer}
                onCardDelete={props.onCardDelete}
              />
            ))}
          </section>{" "}
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
          </section>{" "}
        </>
      ) : (
        <p
          className={
            props.movieCard && props.сhangeNotMovie
              ? "movies__not-movies "
              : "movies__not-movies movies__not-movies_active"
          }
        >
          Ничего не найдено
        </p>
      )}
    </>
  );
}
export default MoviesCardList;
