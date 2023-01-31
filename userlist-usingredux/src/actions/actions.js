import { ACTIONS } from "../constants/constants";
export const setUsers = (payload) => {
  return {
    type: ACTIONS.SET_USERS,
    payload,
  };
};
export const deleteUser = (payload) => {
  return {
    type: ACTIONS.DELETE_USER,
    payload,
  };
};
export const addUser = (payload) => {
  return {
    type: ACTIONS.ADD_USER,
    payload,
  };
};
export const setId = (payload) => {
  return {
    type: ACTIONS.SET_ID,
    payload,
  };
};
export const setIsLoading = (payload) => {
  return {
    type: ACTIONS.SET_ISLOADING,
    payload,
  };
};
