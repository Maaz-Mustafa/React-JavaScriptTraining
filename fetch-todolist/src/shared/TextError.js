import React from "react";
import "../component/styling.css";

function TextError(props) {
  return <div className="text-danger">{props.children}</div>;
}

export default TextError;
