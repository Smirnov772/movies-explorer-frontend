function BurgerMenu(props) {
  return (
    <>
      <div
        onClick={props.onClick}
        className={
          props.toggle === true
            ? "burger__button burger__button_active"
            : "burger__button "
        }
      ></div>
    </>
  );
}
export default BurgerMenu;
