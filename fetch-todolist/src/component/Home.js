import { useEffect, useReducer, createContext } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

import ToDoList from "./ToDoList";
import DeleteFromList from "./DeleteFromList";

import { getTodos, deleteTodo } from "../services/todos.services.js";
import { reducerFunction } from "../reducers/todoapp.reducers.js";

import { ACTIONS } from "../constants/Actions";
import { RQ_KEY_TODOS } from "../constants/magic_constants";

import "./styling.css";

const Home = () => {
  const [state, dispatch] = useReducer(reducerFunction, {
    pageNumber: 1,
    todos: [],
    isDelBlockHidden: false,
    idToDelete: undefined,
    order: undefined,
    search: "",
  });
  const {
    isDelBlockHidden,
    pageNumber,
    todos: displayTodos,
    idToDelete,
    order,
    search,
  } = state;

  const setPageNumber = (pgNumber) =>
    dispatch({ type: ACTIONS.SET_PAGE_NO, payload: pgNumber });

  const pageSize = 4;
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery(
    [RQ_KEY_TODOS, pageNumber, pageSize, order, search],
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
    const object = data.find((obj) => {
      if (obj.id === id) {
        console.log("id", id, "check ", check);
        obj.status = check;
      }
    });
    dispatch({ type: ACTIONS.SET_TODOS, payload: data });
  };

  const { mutate: deleteTodoMutation } = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(RQ_KEY_TODOS);
    },
  });

  const handleDelete = () => {
    deleteTodoMutation(idToDelete);
    openDelDiv(null);
  };

  const toggleDeleteBlock = (id) => {
    return { type: ACTIONS.TOGGLE_DELETE_BLOCK, payload: id };
  };

  const openDelDiv = (id) => {
    dispatch(toggleDeleteBlock(id));
  };

  const handleStatusFilter = (e) => {
    let completedTask = data;
    let status = e.target.value;

    if (status === "Completed") {
      completedTask = completedTask.filter((task) => task.status);
    } else if (status === "Active") {
      completedTask = completedTask.filter((task) => !task.status);
    }
    dispatch({ type: ACTIONS.SET_TODOS, payload: completedTask });
  };

  const searchTask = (value) => {
    dispatch({ type: ACTIONS.SET_SEARCH, payload: value });
  };

  const handleOrder = (event) => {
    dispatch({ type: ACTIONS.SET_ORDER, payload: event.target.value });
  };

  useEffect(() => {
    dispatch({ type: ACTIONS.SET_TODOS, payload: data });
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
          <DeleteFromList handleDelete={handleDelete} openDelDiv={openDelDiv} />
        </div>
      </div>
    </div>
  );
};
export default Home;
