import Loader from "./Loader";

const ToDoList = ({
  list,
  openDelDiv,
  changeStatus,
  openDiv,
  loading,
  error,
}) => {
  return (
    <div>
      <h1 className="header">To DO List</h1>
      <br />
      <button className="btn-primary header" onClick={openDiv}>
        Add a new Task
      </button>
      <br />
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : error === "" ? (
        <div>
          <table cellSpacing={10}>
            {list.map((item) => {
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
                  <td>{item.task}</td>
                  <td>{item.dueDtae}</td>
                  <td>{item.status ? "Completed" : "Active"}</td>
                  <td>
                    <button
                      onClick={() => {
                        // handleDelete(item.id);
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
