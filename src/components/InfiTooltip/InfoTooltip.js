import React from "react";
import authLogoOk from "../../images/authLogoOk.svg";
import authLogoError from "../../images/authLogoError.svg";
import "./infoTooltip.css";

function InfoTooltip(props) {
  return (
    <div className={`popup ${props.isOpen && "popup_active"}`}>
      <div className="popup__container">
        <img
          className="info-tooltip__logo"
          src={props.loggedIn ? authLogoOk : authLogoError}
          alt="Удачно"
        />
        <p className="info-tooltip__paragraph ">
          {props.loggedIn
            ? "Успешно!"
            : "Что-то пошло не так! Попробуйте ещё раз."}
        </p>
      </div>
    </div>
  );
}

export default InfoTooltip;
