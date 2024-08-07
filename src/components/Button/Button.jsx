import React from "react";
import  "./ButtonStyles.css";
const Button = ({ children, style, classname}) => {
  return (
    <div>
      <button className={classname} style={style}>
        {children}
      </button>
    </div>
  );
};

export default Button;
