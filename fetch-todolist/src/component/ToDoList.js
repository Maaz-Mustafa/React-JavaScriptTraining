import { Link } from "react-router-dom";
import { MAGICCONSTANTS } from "../constants/CONSTANTS";
import { Filters } from "./Filters";
import Loader from "./Loader";

const ToDoList = (props) => {
  const {
    list,
    openDelDiv,
    changeStatus,
    handleStatusFilter,
    loading,
    error,
    searchTask,
    handleOrder,
  } = props;
  return (
    <div>
      <h1 className="header">To DO List</h1>
      <br />
      <button className="btn-primary header">
        <Link to="/addTask" className="link-btn">
          Add a new Task
        </Link>
      </button>
      <br />
      <div className="filter-bar">
        <Filters
          handleStatusFilter={handleStatusFilter}
          searchTask={searchTask}
          handleOrder={handleOrder}
        />
      </div>
      <hr />
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : error === null ? (
        <div className="task-table">
          <table cellSpacing={10}>
            {list?.map((item) => {
              return (
                <tr key={item.id}>
                  <td>
                    <input
                      type="checkbox"
                      id={item.id}
                      checked={item.status}
                      onChange={(e) => {
                        changeStatus(e.target.checked, item.id);
                      }}
                    />
                  </td>
                  <td>
                    <Link
                      className={`task-links ${item.status && "strike"}`}
                      to={MAGICCONSTANTS.OPEN_TASK / item.id}
                    >
                      {item.task}
                    </Link>
                  </td>
                  <td>{item.dueDtae}</td>
                  <td
                    className={`${
                      item.status ? "text-danger" : "text-success"
                    }`}
                  >
                    {item.status ? "Completed" : "Active"}
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        openDelDiv(item.id);
                      }}
                      className="btn btn-danger"
                    >
                      remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      ) : (
        <div className="text-danger header">{error}</div>
      )}
    </div>
  );
};

export default ToDoList;
