import linkPic from '../../../images/font-main.svg' ;
function Portfolio() {
  return (
    <section className="portfolio"><h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li>
          <a href="https://smirnov772.github.io/how-to-learn/" target="_blank" className="portfolio__link link">
            Статичный сайт
         <img src={linkPic} alt=""></img> </a>
        </li>
        <li>
          <a href="https://smirnov772.github.io/russian-travel" target="_blank" className=" link portfolio__link">
            Адаптивный сайт
            <img src={linkPic} alt=""></img> </a>
        </li>
        <li>
          <a href=" " target="_blank" className=" link portfolio__link">
            Одностраничное приложение
            <img src={linkPic} alt=""></img> </a>
        </li>
      </ul>{" "}
    </section>
  );
}
export default Portfolio;
