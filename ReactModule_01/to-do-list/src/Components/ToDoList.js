import { useState } from "react";

const ToDoList = ({ list, handleDelete, changeStatus, openDiv }) => {
  return (
    <div>
      <h1>To DO List</h1>
      <br />
      <table cellSpacing={10}>
        {list.map((item) => {
          return (
            <tr key={item.id}>
              <td>
                <input
                  type="checkbox"
                  id={item.id}
                  onClick={(e) => {
                    changeStatus(e.target.checked, item.id);
                  }}
                />
              </td>
              <td>{item.task}</td>
              <td>{item.dueDtae}</td>
              <td>{item.status}</td>
              <td>
                <button
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                >
                  remove
                </button>
              </td>
            </tr>
          );
        })}
      </table>
      <button onClick={openDiv}>Add a new Task</button>
    </div>
  );
};

export default ToDoList;
