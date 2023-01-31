import { ACTIONS } from "../constants/constants.js";

const initialState = {
  users: [],
  id: undefined,
  isLoading: true,
};
const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.SET_USERS:
      return { ...state, users: payload };
    case ACTIONS.DELETE_USER:
      const filteredUsers = state.users.filter((user) => user.id !== payload);
      return { ...state, users: filteredUsers };
    case ACTIONS.ADD_USER:
      console.log({ ...state, users: [...state.users, payload] });
      return { ...state, users: [...state.users, payload] };
    case ACTIONS.SET_ID:
      return { ...state, id: payload };
    case ACTIONS.SET_ISLOADING:
      return { ...state, isLoading: payload };
    default:
      return state;
  }
};
export default userReducer;
