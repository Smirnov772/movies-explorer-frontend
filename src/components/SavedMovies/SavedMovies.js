import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "../Movies/Preloader/Preloader";
import SearchForm from "../Movies/SearchForm/SearchForm";
function SavedMovies() {
  return (
    <section className="movies">
      <SearchForm></SearchForm>
      <MoviesCardList>
      
      </MoviesCardList>
    
    </section>
  );
}
export default SavedMovies;
