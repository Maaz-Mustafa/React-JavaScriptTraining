import { useState, useEffect, useCallback } from "react";
import ToDoList from "./ToDoList";
import DeleteFromList from "./DeleteFromList";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getTodos, deleteTodo } from "../services/todos.services.js";
import "./styling.css";

const Home = () => {
  const [idToDel, setIdToDel] = useState();
  const [isDelBlockHidden, setIsDelBlockHidden] = useState(false);
  const pageSize = 4;
  const [pageNumber, setPageNumber] = useState(1);
  const [displayTodos, setTodos] = useState([]);
  const [order, setOrder] = useState();
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");

  const { data, isLoading, error } = useQuery(
    ["todos", pageNumber, pageSize, order, search],
    () => {
      return getTodos({
        _page: pageNumber,
        _limit: pageSize,
        _sort: "task",
        _order: order,
        task_like: search,
      });
    }
  );

  const changeStatus = (check, id) => {
    const updatedStatusArray = data.map((obj) => {
      if (obj.id === id) {
        obj.status = check;
      }
      return obj;
    });
    setTodos(updatedStatusArray);
  };

  const { mutate: deleteTodoMutation } = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const handleDelete = (id) => {
    deleteTodoMutation(id);
    openDelDiv(null);
  };

  const openDelDiv = (id) => {
    setIsDelBlockHidden(!isDelBlockHidden);
    id && setIdToDel(id);
  };

  const handleStatusFilter = (e) => {
    let completedTask = data;
    let status = e.target.value;

    if (status === "Completed") {
      completedTask = completedTask.filter((task) => task.status);
    } else if (status === "Active") {
      completedTask = completedTask.filter((task) => !task.status);
    }
    setTodos(completedTask);
  };

  const searchTask = (value) => {
    setSearch(value);
  };

  const handleOrder = (event) => {
    setOrder(event.target.value);
  };

  useEffect(() => {
    setTodos(data);
  }, [data]);
  return (
    <div>
      <div className="navBar"></div>
      <div className="Home">
        <ToDoList
          error={error}
          loading={isLoading}
          list={displayTodos}
          openDelDiv={openDelDiv}
          changeStatus={changeStatus}
          handleDelete={handleDelete}
          handleStatusFilter={handleStatusFilter}
          searchTask={searchTask}
          handleOrder={handleOrder}
        />
        <div className="header">
          <button
            className="btn btn-margin"
            onClick={() => setPageNumber(pageNumber - 1)}
            disabled={pageNumber === 1}
          >
            prev
          </button>
          {pageNumber}
          <button
            className="btn btn-margin"
            onClick={() => setPageNumber(pageNumber + 1)}
            disabled={data?.length < pageSize}
          >
            next
          </button>
        </div>

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
