function BurgerMenu() {
    function toglleBurgerMenu(e) {
        console.log(e);
     
     e.target.classList.toggle("burger__button_active");
    }

return (<><div onClick = {toglleBurgerMenu} className="burger__button"></div></>)
};
export default BurgerMenu