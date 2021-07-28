import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
function Register(props) {
  const [name, setName] = React.useState("");

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit({
      name,
      email,
      password,
    });
  }
  return (
    <div className="user-auth">
      <Link to="/" className="header__logo logo">
        <img src={logo} alt="Логотип" />{" "}
      </Link>
      <p className="user-auth__paragraph">Добро пожаловать!</p>
      <form onSubmit={handleSubmit} className="user-auth__form">
        <p className="user-auth__input-name">Имя</p>
        <input
          required
          value={name}
          onChange={handleNameChange}
          className="user-auth__input"
          type="name"
        ></input>
        <p className="user-auth__input-name">E-mail</p>
        <input
          required
          onChange={handleEmailChange}
          value={email}
        
          type="email"
          className="user-auth__input"
        ></input>
        <p className="user-auth__input-name">Пароль</p>
        <input
          required
          type="password"
          onChange={handlePasswordChange}
          value={password}
          
          className="user-auth__input"
        ></input>
        <button type="submit" className="user-auth__button">
          Зарегистрироваться
        </button>
      </form>
      <Link className="user-auth__link link" to="/signin">
        Уже зарегистрированы?
        <span className="user-auth__link-span"> Войти</span>
      </Link>
    </div>
  );
}
export default Register;
