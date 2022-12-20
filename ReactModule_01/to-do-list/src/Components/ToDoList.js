const ToDoList = ({ list, handleDelete, changeStatus, openDiv }) => {
  return (
    <div>
      <h1 className="header">To DO List</h1>
      <br />
      <button className="btn header" onClick={openDiv}>
        Add a new Task
      </button>
      <table cellSpacing={10}>
        {list.map((item) => {
          return (
            <tr key={item.id}>
              <td>
                <input
                  type="checkbox"
                  id={item.id}
                  checked={item.status}
                  onClick={(e) => {
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
                    handleDelete(item.id);
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
  );
};

export default ToDoList;
