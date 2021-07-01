
function MoviesCard(props) {
  function timeMovies() {
    const time = props.duration;
    const hours = Math.floor(time / 60);
    let minutes = time % 60;
  minutes = minutes < 10 ? '0' + minutes : minutes;
      
    return `${hours}ч ${minutes}м`;
  }
  return (
    <div className="movies-card">
      <img
        className="movies-card__image"
        src={`https://api.nomoreparties.co${props.image}`}
        alt="Картинка"
        // onClick={handleClick}
      />
      <div className="movies-card__container">
        {" "}
        <div className="movies-card__discription">
          {" "}
          <p className="movies-card__paragraph">{props.name}</p>
          <p className="movies-card__time">
            {timeMovies()}
            {/* {props.name} */}
          </p>
        </div>
        <button
          className={`movies-card__check  movies-card__check_disable         `}
          //   onClick={handleLikeClick}
          type="button"
        ></button>
      </div>
    </div>
  );
}
export default MoviesCard;
