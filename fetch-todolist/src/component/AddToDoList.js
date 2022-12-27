import { useState } from "react";

const AddToList = ({ handleAdd, openDiv }) => {
  const [task, setTask] = useState("");
  const [ddate, setDdate] = useState("");

  const handleTask = (e) => {
    setTask(e.target.value);
  };
  const handleDdate = (e) => {
    setDdate(e.target.value);
  };
  return (
    <div className="Modal-content">
      Add a new Task{" "}
      <button className=" btn-div-close" onClick={openDiv}>
        {" "}
        X{" "}
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
  );
};

export default AddToList;
