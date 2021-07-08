
function MoviesCard(props) {
  const isSave = props.savedMovie.some(
    (i) => i.movieId === props.movieId
  );

  const cardLikeButtonClassName =
    isSave ? "" : "movies-card__check_disable";
  function timeMovies(times) {
    const time = times;
    const hours = Math.floor(time / 60);
    let minutes = time % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return `${hours}ч ${minutes}м`;
  }
  function handleClick() {
    props.clickImage(props.trailer);
  }
  function handleClickChange() {
    props.clickChange(props);
  }

  return (
    <div className="movies-card">
      {" "}
      <img
        className="movies-card__image"
        src={props.image}
        alt="Картинка"
        onClick={handleClick}
      />{" "}
      <div className="movies-card__discription">
        {" "}
        <p className="movies-card__paragraph">{props.nameRU}</p>
        <p className="movies-card__time">{timeMovies(props.duration)}</p>
      </div>
      <button
        className={`movies-card__check ${cardLikeButtonClassName}`}
        onClick={handleClickChange}
        type="button"
      ></button>
    </div>
  );
}
export default MoviesCard;
