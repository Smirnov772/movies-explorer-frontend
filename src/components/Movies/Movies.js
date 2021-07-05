import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "./Preloader/Preloader";
import SearchForm from "./SearchForm/SearchForm";
import React, { Suspense } from "react";

function Movies(props) {
  // const [filterMovies, setFilterMovies] = useState([]);
  // const [moviesCard, setMoviesCard] = useState([]);
  // const [inputSearch, setInputSearch] = useState("");
  // const dataFilter = JSON.parse(localStorage.getItem("datafilter"));

  // useEffect(() => {
  //   movieApi
  //     .getMovies()
  //     .then((dataCard) => {
  //       localStorage.setItem("dataCard", JSON.stringify(dataCard));
  //       setMoviesCard(dataCard);
  //     })

  //     .catch((err) => console.log(err));
  // }, []);

  //   useEffect(() => {setFilterMovies(dataFilter)},[inputSearch])

  // function imputSearch(input) {
  //   localStorage.setItem(
  //     "datafilter",
  //       JSON.stringify(
  //         moviesCard.filter((item) => {
  //           if (input == "") {
  //             return item;
  //           } else if (
  //             item.nameRU.toLowerCase().includes(input.toLowerCase())
  //           ) {
  //             return item;
  //           }
  //         })
  //       )
  //     )
  //     // setFilterMovies(dataFilter)
  //     setInputSearch(input)
  // }
  // function handleCardDelete(deletedCard) {
  //   let movie = JSON.parse(localStorage.getItem("saveDataCard"));
  //   const [id] = movie.filter((i) => `${i.movieId}` === `${deletedCard.movieId}`);
  //   // console.log(deletedCard);
  //   console.log(id._id);
  //   console.log(deletedCard.movieId);
  //   mainApi
  //     .removeCard(id._id)
  //     .then(() => {})
  //     .catch((err) => console.log(err));
  // }

  function handleSubmit(input) {
    props.onSubmit(input);
  }
  function handleClickChange(card) {
    props.clickChange(card);
  }

  return (
    <section className="movies">
      <SearchForm
        onSubmit={handleSubmit}
        onChange={props.onChange}
      ></SearchForm>
      <MoviesCardList
        savedMovie={props.savedMovie}
        onCardDelete={props.handleCardDelete}
        movieCard={props.movies}
        clickChange={props.clickChange}
      ></MoviesCardList>
      <Preloader></Preloader>
    </section>
  );
}
export default Movies;
