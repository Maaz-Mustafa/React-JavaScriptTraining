import { useState } from "react";
import AddToList from "./AddToList";
import ToDoList from "./ToDoList";
import "./styling.css";

const Home = () => {
  const [list, setList] = useState([
    {
      id: 1,
      task: "To complete Assignments on React",
      dueDtae: "14-12-2022",
      status: "Active",
    },
    {
      id: 2,
      task: "Submit The Assignments of Java Script",
      dueDtae: "13-12-2022",
      status: "Completed",
    },
    {
      id: 3,
      task: "Project Selection",
      dueDtae: "20-12-2022",
      status: "Active",
    },
  ]);
  const [isBlockHidden, setIsBlockHidden] = useState(false);
  const changeStatus = (check, id) => {
    const updatedStatusArray = list.map((obj) => {
      if (obj.id === id && check == true) {
        obj.status = "Completed";
      } else if (obj.id === id && check === false) {
        obj.status = "Active";
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
          className="HiddenBlock"
          style={{ display: isBlockHidden ? "block" : "none" }}
        >
          <AddToList handleAdd={handleAdd} />
        </div>
      </div>
    </div>
  );
};

export default Home;
