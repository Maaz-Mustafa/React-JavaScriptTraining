import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { getTodos } from "../services/todos.services.js";

const useFetch = () => {
  const { data, isLoading, error } = useQuery("todos", getTodos);
  // useEffect(() => {
  //   fetch("http://localhost:8080/todo")
  //     .then((resp) => {
  //       if (!resp.ok) throw Error("Fetching To Do List Failed");
  //       return resp.json();
  //     })
  //     .then((todolist) => {
  //       const timer = setTimeout(() => {
  //         setData(todolist);
  //         setLoading(false);
  //         clearTimeout(timer);
  //       }, 1000);
  //     })
  //     .catch((err) => {
  //       setError(err.message);
  //       setLoading(false);
  //     });
  // }, []);

  return { isLoading, error, data };
};

export default useFetch;
