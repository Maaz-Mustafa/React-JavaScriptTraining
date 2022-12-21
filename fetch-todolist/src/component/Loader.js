import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "reactstrap";

function Loader() {
  return (
    <div className="header">
      <br />
      <Spinner style={{ width: "2rem", height: "2rem" }} />
    </div>
  );
}

export default Loader;
