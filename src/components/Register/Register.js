import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
function Register() {
  return (
    <div className="register">
      <Link to="/" className="header__logo logo"><img  src={logo} alt="Логотип" />{" "}</Link> 
      <p className="register__paragraph">Добро пожаловать!</p>
      <form className="register__form">
      <p class="register__input-name">Имя</p>
        <input required className="register__input" type="name"></input>
        <p class="register__input-name">E-mail</p>
        <input required className="register__input" type="email"></input>
        <p class="register__input-name">Пароль</p>
        <input required className="register__input" type="password"></input>
        <button type="submit" className="register__button">
          Зарегистрироваться
        </button>
      </form>
      <Link className="register__link link" to="/signin">
        Уже зарегистрированы?<span className="register__link-span"> Войти</span>
      </Link>
    </div>
  );
}
export default Register;
