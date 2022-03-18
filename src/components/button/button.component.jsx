import React from "react";

import './button.styles.scss'

/* 
    Default
  
    inverted

    google sing in
*/

const BUTTON_TYPE_CLASSES = {
    google: "google-sign-in",
    inverted: "inverted",
};

const Button = ({ children, buttonType }) => {

    return (
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}>{children}</button>
    );
};

export default Button;
