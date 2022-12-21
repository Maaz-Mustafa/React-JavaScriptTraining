import { useState, useEffect } from "react";
import AddToList from "./AddToDoList";
import ToDoList from "./ToDoList";
import "./styling.css";
import useFetch from "../customHook/useFetch";

const Home = () => {
  const [list, setList] = useState([]);
  const [isBlockHidden, setIsBlockHidden] = useState(false);
  const { loading, error, data } = useFetch();
  useEffect(() => {
    setList(data);
  }, [data]);

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
        status: false,
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
          error={error}
          loading={loading}
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
