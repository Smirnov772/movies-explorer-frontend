import { Link } from "react-router-dom";
import pic from "../../../images/pic.svg";
function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="section__title">Студент</h2>
      <div className="about-me__container-author">
        <div className="about-me__container-about">
          {" "}
          <h2 className="about-me__author">Сергей</h2>
          <p className="about-me__subline">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__title">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>{" "}
          <ul className="about-me__list">
            <li>
              <a href="https://vk.com/id4269316" className="link about-me__link">
                Vkontakte
              </a>
            </li>
            <li>
              <Link to=" " className="link about-me__link">
                Github
              </Link>
            </li>
          </ul>
        </div>{" "}
        <img className="about-me__pic" src={pic} alt="Фото" />
      </div>
    </section>
  );
}
export default AboutMe;
