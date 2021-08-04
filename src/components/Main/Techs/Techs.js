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
          <p to=" " className="  techs__link link">
            HTML
          </p>
        </li>
        <li>
          {" "}
          <p to=" " className=" link techs__link">
            CSS
          </p>
        </li>
        <li>
          {" "}
          <p to=" " className=" link techs__link">
            JS
          </p>
        </li>
        <li>
          {" "}
          <p to=" " className=" link techs__link">
            React
          </p>
        </li>
        <li>
          {" "}
          <p to=" " className=" link techs__link">
            Git
          </p>
        </li>
        <li>
          {" "}
          <p to=" " className=" link techs__link">
            Express.js
          </p>
        </li>
        <li>
          {" "}
          <p to=" " className=" link techs__link">
            mongoDB
          </p>
        </li>
      </ul>{" "}
    </section>
  );
}
export default Techs;
