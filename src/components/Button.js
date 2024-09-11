import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="form-btn">
        {props.text} {props.number}
      </button>
    </div>
  );
};

export default Button;
