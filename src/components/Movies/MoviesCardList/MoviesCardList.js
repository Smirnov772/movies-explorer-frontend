import MoviesCard from "../MoviesCard/MoviesCard";
function MoviesCardList(props) {
function openTrailer(url){
  window.open(url)
}
  return (
    <section className="movies-card-list">
        
        {props.movieCard.map((item) => (
          <MoviesCard
          key={item.id}
          name={item.nameRU}
          image={item.image.url}
          duration={item.duration}
          trailer={item.trailerLink}
          clickImage={openTrailer}
          />
        ))}
    
    </section>
    
  );
}
export default MoviesCardList;
