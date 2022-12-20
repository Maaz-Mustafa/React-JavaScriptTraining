import { useState } from "react";
import AddToList from "./AddToList";
import ToDoList from "./ToDoList";
import "./styling.css";
import { data } from "../Model/data.js";

const Home = () => {
  const [list, setList] = useState(data);
  const [isBlockHidden, setIsBlockHidden] = useState(false);
  const changeStatus = (check, id) => {
    const updatedStatusArray = list.map((obj) => {
      if (obj.id === id) {
        obj.status = check;
      }
      return obj;
    });
    setList(updatedStatusArray);
  };

  const handleDelete = (id) => {
    const resltArray = list.filter((filteredItem) => id !== filteredItem.id);
    setList(resltArray);
  };
  const openDiv = () => {
    let condition = !isBlockHidden ? true : false;
    setIsBlockHidden(condition);
  };
  const handleAdd = (task, ddate) => {
    if (task !== "" && ddate !== "") {
      const obj = {
        id: list.length + 1,
        task: task,
        dueDtae: ddate.toString(),
        status: "Active",
      };
      console.log(obj.status);
      setList([...list, obj]);
      setIsBlockHidden(false);
    }
  };

  return (
    <div>
      <div className="navBar"></div>
      <div className="Home">
        <ToDoList
          list={list}
          openDiv={openDiv}
          changeStatus={changeStatus}
          handleDelete={handleDelete}
        />
        <div
          className="Modal"
          style={{ display: isBlockHidden ? "block" : "none" }}
        >
          <AddToList handleAdd={handleAdd} openDiv={openDiv} />
        </div>
      </div>
    </div>
  );
};

export default Home;
