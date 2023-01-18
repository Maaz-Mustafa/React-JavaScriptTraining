import { GET, PATCH, POST, DELETE } from "./api";

export const getTodos = (params) => {
  return GET("/todo", params);
};

export const getTodoById = (id) => {
  return GET(`/todo/${id}`);
};
export const patchTodo = (id, body) => {
  return PATCH(`/todo/${id}`, body);
};
export const postTodo = (body) => {
  return POST("/todo", body);
};
export const deleteTodo = (id) => {
  return DELETE(`/todo/${id}`);
};
