import { useState, useEffect, useMemo } from "react";
import ToDoList from "./ToDoList";
import useFetch from "../customHook/useFetch";
import DeleteFromList from "./DeleteFromList";
import "./styling.css";

const Home = () => {
  const [list, setList] = useState([]);
  const [idToDel, setIdToDel] = useState();
  const [isDelBlockHidden, setIsDelBlockHidden] = useState(false);
  const { loading, error, data } = useFetch();
  const [displayTodos, setTodos] = useState(list);
  const [order, setOrder] = useState();

  useEffect(() => {
    setList(data);
  }, [data]);

  useEffect(() => {}, [displayTodos]);

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
    const resltArray = displayTodos.filter(
      (filteredItem) => id !== filteredItem.id
    );
    setTodos(resltArray);
    openDelDiv();
  };
  const openDelDiv = (id) => {
    let condition = !isDelBlockHidden ? true : false;
    setIsDelBlockHidden(condition);
    setIdToDel(id);
  };
  const handleStatusFilter = (status) => {
    let completedTask = list;

    if (status === "Completed") {
      completedTask = completedTask.filter((task) => task.status);
    } else if (status === "Active") {
      completedTask = completedTask.filter((task) => !task.status);
    }
    setTodos(completedTask);
  };
  const searchTask = (search) => {
    let searchedList = list;
    searchedList = searchedList.filter((item) => {
      return item.task.includes(search);
    });
    setTodos(searchedList);
  };
  useEffect(() => {
    order === "asc"
      ? displayTodos.sort((a, b) => {
          return a.task > b.task ? -1 : 1;
        })
      : displayTodos.sort((a, b) => (a.task > b.task ? 1 : -1));
    console.log(displayTodos);
  }, [order]);
  const handleOrder = (value) => {
    setOrder(value);
  };
  return (
    <div>
      <div className="navBar"></div>
      <div className="Home">
        <ToDoList
          error={error}
          loading={loading}
          list={displayTodos}
          openDelDiv={openDelDiv}
          changeStatus={changeStatus}
          handleDelete={handleDelete}
          handleStatusFilter={handleStatusFilter}
          searchTask={searchTask}
          handleOrder={handleOrder}
        />

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
