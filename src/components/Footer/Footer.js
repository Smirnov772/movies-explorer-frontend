function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__header">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <div className="footer__container">
        <p className="footer__copyright">© 2020</p>
        <ul className="footer__list">
          <li>
            {" "}
            <a href="https://praktikum.yandex.ru/"  target="_blank"className="footer__link  link">
              Яндекс.Практикум
            </a>{" "}
          </li>
          <li>
            <a href="https://github.com/Smirnov772" target="_blank" className="footer__link link">
              Github
            </a>{" "}
          </li>
          <li>
            <a href="https://vk.com/id4269316" target="_blank" className="footer__link link">
              Vkontakte
            </a>{" "}
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
