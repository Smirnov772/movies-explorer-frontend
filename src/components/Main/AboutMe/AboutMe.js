import { Link } from "react-router-dom";
import imageMe from "../../../images/IMG-20210129-WA0004 .jpeg";
function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="section__title">Обо мне</h2>
      <div className="about-me__container-author">
        <div className="about-me__container-about">
          {" "}
          <h2 className="about-me__author">Сергей</h2>
          <p className="about-me__subline">Фронтенд-разработчик, 31 год</p>
          <p className="about-me__title">
            Я никогда не был связан с програмированием, но всегда увлекался онлайн технологиями и современными устройствами. Закончил техникум на специалиста по автотранспортным перевозкам. Сейчас проживаю в Подмосковье. Где-то начале 2020 года начал самостоятельно изучать програмирование и через несколько месяцев записался на курс по веб-разработке. После того как прошёл курс, приступил к поискам новой работы.
          </p>{" "}
          <ul className="about-me__list">
            <li>
              <a href="https://vk.com/id4269316" target="_blank" className="link about-me__link">
                Vkontakte
              </a>
            </li>
            <li>
              <Link to="https://github.com/Smirnov772" target="_blank" className="link about-me__link">
                Github
              </Link>
            </li>
          </ul>
        </div>{" "}
        <img className="about-me__pic" src={imageMe} alt="Фото" />
      </div>
    </section>
  );
}
export default AboutMe;
