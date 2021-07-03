import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  function openTrailer(url) {
    window.open(url);
  }

  return (
    <section className="movies-card-list">
      {props.movieCard.map((item) => (
        <MoviesCard
          key={item._id}
          _id={item._id}
          image={item.image}
          trailer={item.trailer}
          duration={item.duration}
          nameRU={item.nameRU}
          ownerId={item.owner}
          clickImage={openTrailer}
          onCardDelete={props.onCardDelete}
        />
      ))}
    </section>
  );
}
export default MoviesCardList;
