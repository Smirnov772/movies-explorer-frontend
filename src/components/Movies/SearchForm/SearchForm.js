import icon from "../../../images/icon-search.svg";
function SearchForm() {
  return (
    <section className="search-form">
      <form className="search-form__items">
        {" "}
        <img className="search-form__icon" src={icon} alt="Иконка" />{" "}
        <input required placeholder="Фильм" className="search-form__input" />
        <button className="search-form__button" type="submit">
          Найти
        </button></form>
        <label className="checkbox">
          <input type="checkbox" />
          <span className="checkbox__switch"></span>
          <p className="checkbox__name">Короткометражки</p>{" "}
        </label>
      
    </section>
  );
}
export default SearchForm;
