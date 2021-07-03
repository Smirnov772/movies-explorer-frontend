function Profile(props) {
  return (
    <section className="profile">
      <h3 className="profile__user">Привет, name </h3>
      <form className="profile__form">
    <div className="profile__input-container"> <p className="profile__user-name profile__text">Имя
        </p>
          <span>Name</span>
        <input className="profile__input profile__text" required type="name"></input></div>   


      <div className="profile__input-container"><p className="profile__user-email profile__text">E-mail
        </p>
          <span>yandex@ya.ru</span>
        <input className="profile__input profile__text" required type="email"></input></div>  
      </form>
        <button className="profile__button " type="submit">
          Редактировать
        </button>
      <button onClick={props.loggedOut}className="profile__button profile__button_text-red" type="submit">
        Выйти из аккаунта
      </button>
    </section>
  );
}
export default Profile;
