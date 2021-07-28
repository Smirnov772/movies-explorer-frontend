import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import React from "react";
function Login(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit({
      password,
      email,
    });
  }
  return (
    <div className="user-auth">
      <Link to="/" className="header__logo logo">
        <img src={logo} alt="Логотип" />{" "}
      </Link>
      <p className="user-auth__paragraph">Рады видеть!</p>
      <form onSubmit={handleSubmit} className="user-auth__form">
        <p className="user-auth__input-name">E-mail</p>
        <input
          required
          onChange={handleEmailChange}
          value={email}
          type="email"
          placeholder="Email"
          className="user-auth__input"
          
        ></input>
        <p className="user-auth__input-name">Пароль</p>
        <input
          required
          onChange={handlePasswordChange}
          value={password}
          type="password"
          placeholder="Пароль"
          className="user-auth__input"
        
        ></input>
        <button type="submit" className="user-auth__button">
          Войти
        </button>
      </form>
      <Link className="user-auth__link link" to="/signup">
        Ещё не зарегистрированы?
        <span className="user-auth__link-span"> Регистрация</span>
      </Link>
    </div>
  );
}
export default Login;
