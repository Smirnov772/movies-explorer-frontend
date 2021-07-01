import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
function Register() {
  return (
    <div className="user-auth">
      <Link to="/" className="header__logo logo"><img  src={logo} alt="Логотип" />{" "}</Link> 
      <p className="user-auth__paragraph">Добро пожаловать!</p>
      <form className="user-auth__form">
      <p class="user-auth__input-name">Имя</p>
        <input required className="user-auth__input" type="name"></input>
        <p class="user-auth__input-name">E-mail</p>
        <input required className="user-auth__input" type="email"></input>
        <p class="user-auth__input-name">Пароль</p>
        <input required className="user-auth__input" type="password"></input>
        <button type="submit" className="user-auth__button">
          Зарегистрироваться
        </button>
      </form>
      <Link className="user-auth__link link" to="/signin">
        Уже зарегистрированы?<span className="user-auth__link-span"> Войти</span>
      </Link>
    </div>
  );
}
export default Register;
