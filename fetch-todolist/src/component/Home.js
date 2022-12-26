import { useState, useEffect } from "react";
import AddToList from "./AddToDoList";
import ToDoList from "./ToDoList";
import "./styling.css";
import useFetch from "../customHook/useFetch";
import DeleteFromList from "./DeleteFromList";
import { Route, Routes } from "react-router-dom";

const Home = () => {
  const [list, setList] = useState([]);
  const [idToDel, setIdToDel] = useState();
  const [isBlockHidden, setIsBlockHidden] = useState(false);
  const [isDelBlockHidden, setIsDelBlockHidden] = useState(false);
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
    openDelDiv();
  };
  const openDiv = () => {
    let condition = !isBlockHidden ? true : false;
    setIsBlockHidden(condition);
  };
  const openDelDiv = (id) => {
    let condition = !isDelBlockHidden ? true : false;
    setIsDelBlockHidden(condition);
    setIdToDel(id);
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
          openDelDiv={openDelDiv}
        />
        {/* <div
          className="Modal"
          style={{ display: isBlockHidden ? "block" : "none" }}
        >
          <AddToList handleAdd={handleAdd} openDiv={openDiv} />
        </div> */}
        <Routes>
          {/* <Route
            path="/addTask"
            element={<AddToList handleAdd={handleAdd} />}
          /> */}
        </Routes>

        <div
          className="Modal"
          style={{ display: isDelBlockHidden ? "block" : "none" }}
        >
          <DeleteFromList
            handleDelete={() => handleDelete(idToDel)}
            openDelDiv={openDelDiv}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
