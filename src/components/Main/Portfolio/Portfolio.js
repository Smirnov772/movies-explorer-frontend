import { Link } from "react-router-dom";
function Portfolio() {
  return (
    <section className="portfolio"><h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li>
          <Link to=" " className="portfolio__link link">
            Статичный сайт
          </Link>
        </li>
        <li>
          <Link to=" " className=" link portfolio__link">
            Адаптивный сайт
          </Link>
        </li>
        <li>
          <Link to=" " className=" link portfolio__link">
            Одностраничное приложение
          </Link>
        </li>
      </ul>{" "}
    </section>
  );
}
export default Portfolio;
