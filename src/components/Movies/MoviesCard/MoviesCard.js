import logo from "../../../images/pic__COLOR_pic.png";
function MoviesCard() {
  return (
    <div className="movies-card">
      <img
        className="movies-card__image"
        src={logo}
        alt="Картинка"
        // onClick={handleClick}
      />
      <div className="movies-card__container">
        {" "}
        <div className="movies-card__discription">
          {" "}
          <p className="movies-card__paragraph">
            33 слова о дизайне
            {/* {props.name} */}
          </p>
          <p className="movies-card__time">
            1ч42м
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
