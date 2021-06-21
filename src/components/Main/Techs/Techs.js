import { Link } from "react-router-dom";
function Techs() {
  return (
    <section className="techs">
      <h2 className="section__title">Технологии</h2>
      <div className="techs__container">
        {" "}
        <h3 className="techs__title">
        7 технологий
        </h3>
        <p className="techs__subtitle">
        На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
        </p>
      </div>{" "}
      <ul className="techs__list">
        <li>
          {" "}
          <Link to=" " className="  techs__link link">
            HTML
          </Link>
        </li>
        <li>
          {" "}
          <Link to=" " className=" link techs__link">
            CSS
          </Link>
        </li>
        <li>
          {" "}
          <Link to=" " className=" link techs__link">
            JS
          </Link>
        </li>
        <li>
          {" "}
          <Link to=" " className=" link techs__link">
            React
          </Link>
        </li>
        <li>
          {" "}
          <Link to=" " className=" link techs__link">
            Git
          </Link>
        </li>
        <li>
          {" "}
          <Link to=" " className=" link techs__link">
            Express.js
          </Link>
        </li>
        <li>
          {" "}
          <Link to=" " className=" link techs__link">
            mongoDB
          </Link>
        </li>
      </ul>{" "}
    </section>
  );
}
export default Techs;
