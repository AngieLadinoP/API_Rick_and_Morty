import React from "react";
import "./button.css";

const Button = (props) => {
  const { name, onChange, pageInfo } = props;
  return (
    <>
      {pageInfo ? (
        <button type="button" className="button" onClick={onChange}>
          {name}
        </button>
      ) : null}
    </>
  );
};

export default Button;
