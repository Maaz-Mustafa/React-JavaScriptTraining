import { Link } from "react-router-dom";
import { MAGICCONSTANTS } from "../constants/CONSTANTS.js";

import AddTaskForm from "./AddTaskForm.js";

const AddToList = () => {
  return (
    <div className="Modal">
      <div className="Modal-content">
        Add a new Task{" "}
        <button className=" btn-div-close">
          <Link to={MAGICCONSTANTS.HOME}> X </Link>
        </button>
        <hr />
        <AddTaskForm />
      </div>
    </div>
  );
};

export default AddToList;
