import React from "react";
import "../styles/styles.css";

function TextError(props) {
  return <div className="text-danger">{props.children}</div>;
}

export default TextError;
