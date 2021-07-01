import MoviesCard from "../MoviesCard/MoviesCard";
function MoviesCardList(props) {
  return (
    <section className="movies-card-list">
        
        {props.movieCard.map((item) => (
          <MoviesCard
          name={item.nameRU}
          image={item.image.url}
          duration={item.duration}
          />
        ))}
    
    </section>
    
  );
}
export default MoviesCardList;
