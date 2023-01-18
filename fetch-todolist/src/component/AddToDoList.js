import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { postTodo } from "../services/todos.services.js";
import AddTaskForm from "./AddTaskForm.js";

const AddToList = ({ openDiv }) => {
  const [task, setTask] = useState("");
  const [ddate, setDdate] = useState("");
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleTask = (e) => {
    setTask(e.target.value);
  };

  const handleDdate = (e) => {
    setDdate(e.target.value);
  };

  // const activity = {
  //   id: "",
  //   task: task,
  //   dueDtae: ddate,
  //   status: false,
  // };
  // const { mutate: postTodoMutate, isLoading: postTodoLoading } = useMutation(
  //   postTodo,
  //   {
  //     onSuccess: () => {
  //       queryClient.invalidateQueries("todos");
  //     },
  //   }
  // );

  // const handleAdd = () => {
  //   postTodoMutate(activity);
  //   navigate("/");
  // };

  return (
    <div className="Modal">
      <div className="Modal-content">
        Add a new Task{" "}
        <button className=" btn-div-close">
          <Link to="/"> X </Link>
        </button>
        <hr />
        {/* <form>
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
                  onClick={handleAdd}
                />
              </td>
            </tr>
          </table>
        </form> */}
        <AddTaskForm />
      </div>
    </div>
  );
};

export default AddToList;
