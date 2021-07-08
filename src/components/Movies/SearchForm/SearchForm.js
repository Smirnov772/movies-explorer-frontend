import icon from "../../../images/icon-search.svg";
import React, { useState } from "react";
function SearchForm(props) {
  const [imputSearch, setImputSearch] = useState("");
  
  
  function handleSearchChange(e) {
    setImputSearch(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit(imputSearch);
  }

  return (
    <section className="search-form">
      <form onSubmit={handleSubmit} className="search-form__items">
        {" "}
        <img className="search-form__icon" src={icon} alt="Иконка" />{" "}
        <input
          onChange={handleSearchChange}
          placeholder="Фильм"
          type="search"
          className="search-form__input"
        />
        <button className="search-form__button" type="submit">
          Найти
        </button>
      </form>
      <label className="checkbox">
        <input type="checkbox" onChange={props.onChange}/>
        <span className="checkbox__switch"></span>
        <p className="checkbox__name">Короткометражки</p>{" "}
      </label>
    </section>
  );
}
export default SearchForm;
