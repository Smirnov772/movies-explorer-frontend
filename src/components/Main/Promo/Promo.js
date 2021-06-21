import landingLogo from "../../../images/landing-logo.svg";
function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        {" "}
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <h3 className="promo__subtitle">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </h3> <a href=" " className="promo__link link">
        Узнать больше
      </a>
      </div>
      <img className="promo-image" src={landingLogo} alt="Логотип" />
     
    </section>
  );
}
export default Promo;
