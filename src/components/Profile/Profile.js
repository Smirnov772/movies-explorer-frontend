import React from "react";
import { currentUserContext } from "../contexts/CurrentUserContext";
import { useFormWithValidation } from "../hooks/useForm";

function Profile(props) {
  const currentUser = React.useContext(currentUserContext);
  const { values, handleChange, resetForm, errors, isValid } =
    useFormWithValidation();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [changeInput, setChangeInput] = React.useState(false);

  React.useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setEmail(currentUser.email);
      resetForm(currentUser, {}, true);
    }
  }, [currentUser, resetForm]);

  function handleNameChange(e) {
    setName(e.target.values);
  }

  function handleEmailChange(e) {
    setEmail(e.target.values);
  }

  function handleSubmit(e) {
    console.log(e);

    e.preventDefault();
    props.onUpdateUser({
      name,
      email,
    });
  }
  function handleChangeInput() {
    changeInput ? setChangeInput(false) : setChangeInput(true);
  }
  console.log(changeInput);
  const isInputOpen = changeInput ? "block" : "none";
  const isSpanOpen = changeInput ? "none" : "block";
  return (
    <section className="profile">
      <h3 className="profile__user">Привет, {name} </h3>
      <form onSubmit={handleSubmit} className="profile__form">
        <div className="profile__input-container">
          {" "}
          <p className="profile__user-name profile__text">Имя</p>
          <span style={{ display: `${isSpanOpen}` }}>{name}</span>
          <input
            style={{ display: `${isInputOpen}` }}
            className="profile__input profile__text"
            required
            value={values.name}
            onChange={handleNameChange}
            minLength="2"
            maxLength="40"
            type="text"
            id="userName"
            name="name"
            onChange={handleChange}
          ></input>
        </div>
        <span class="profile__errorValid">{errors.name}</span>

        <div className="profile__input-container">
          <p className="profile__user-email profile__text">E-mail</p>
          <span style={{ display: `${isSpanOpen}` }}>{email}</span>
          <input
            style={{ display: `${isInputOpen}` }}
            className="profile__input profile__text"
            required
            value={values.email}
            onChange={handleEmailChange}
            minLength="2"
            maxLength="50"
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
          ></input>
        </div>
        <span class="profile__errorValid">{errors.email}</span>
        <button
          style={isValid && changeInput ? { display: "block", color: "green" } : {}}
          className="profile__button profile__button_submit"
          type="submit"
          onClick={handleChangeInput}
        >
          Сохранить
        </button>
        <button
          style={{ display: `${isSpanOpen}` }}
          className="profile__button "
          type="button"
          onClick={handleChangeInput}
        >
          Редактировать
        </button>
      </form>
      <button
        onClick={props.loggedOut}
        className="profile__button profile__button_text-red"
      >
        Выйти из аккаунта
      </button>
    </section>
  );
}
export default Profile;
