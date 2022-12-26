import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddToList = ({ openDiv }) => {
  const [task, setTask] = useState("");
  const [ddate, setDdate] = useState("");
  const navigate = useNavigate();
  const handleTask = (e) => {
    setTask(e.target.value);
  };
  const handleDdate = (e) => {
    setDdate(e.target.value);
  };
  const activity = {
    id: "",
    task: task,
    dueDtae: ddate,
    status: false,
  };
  const handleAdd = () => {
    fetch("http://localhost:8080/todo", {
      method: "POST",
      body: JSON.stringify(activity),
      headers: { "content-type": "application/json" },
    });
    navigate("/");
  };
  return (
    <div className="Modal">
      <div className="Modal-content">
        Add a new Task{" "}
        <button className=" btn-div-close">
          <Link to="/"> X </Link>
        </button>
        <hr />
        <form>
          <table>
            <tr>
              <td>Task</td>
              <td>
                <input type="text" name="task" onBlur={handleTask} />
              </td>
            </tr>
            <tr>
              <td>Due Date</td>
              <td>
                <input type="date" name="ddate" onBlur={handleDdate} />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input
                  type="button"
                  className="btn btn-primary"
                  name="add"
                  value="Add"
                  onClick={() => handleAdd(task, ddate)}
                />
              </td>
            </tr>
          </table>
        </form>
      </div>
    </div>
  );
};

export default AddToList;
