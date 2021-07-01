function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="section__title">О проекте</h2>

      <ul className="about-project__list">
        <li className="about-project__item">
          <h3 className="about-project__title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__subtitle">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>

        <li className="about-project__item">
          <h3 className="about-project__title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__subtitle">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <ul className="line-tech">
        <li className="line-tech__text line-tech__text_style-blue">1 неделя<span> Back-end</span></li>
        <li className="line-tech__text line-tech__text_style-grey">4 недели<span> Front-end</span></li>
      </ul>
    </section>
  );
}
export default AboutProject;
