import React from "react";

import PacmanLoader from "react-spinners/PacmanLoader";

function Loader() {
  return (
    <div className="header">
      <br />
      <PacmanLoader color="#c9290d" />
    </div>
  );
}

export default Loader;
