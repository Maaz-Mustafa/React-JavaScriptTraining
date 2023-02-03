import { GET } from "./api";

export const getUsers = (params) => {
  return GET("/users", params);
};

export const getUserById = (id) => {
  return GET(`/users/${id}`);
};
