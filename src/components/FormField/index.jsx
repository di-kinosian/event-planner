import React from "react";
import "./index.scss";

const FormField = (props) => {
  return (
    <div className={props.className}>
      <div className="label">
        <span className="label-text">{props.label}</span>
        {props.isRequired ? <span className="required">*</span> : null}
      </div>
      {props.children}
      {props.errorText ? <p className="error-text">{props.errorText}</p> : null}
    </div>
  );
};

export default FormField;
