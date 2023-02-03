import { ACTIONS } from "../constants/Actions";

export const reducerFunction = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_PAGE_NO:
      return { ...state, pageNumber: action.payload };
    case ACTIONS.SET_TODOS:
      return { todos: action.payload };
    case ACTIONS.TOGGLE_DELETE_BLOCK:
      return {
        ...state,
        isDelBlockHidden: !state.isDelBlockHidden,
        idToDel: action.payload,
      };
    case ACTIONS.SET_ORDER:
      return { ...state, order: action.payload };
    case ACTIONS.SET_SEARCH:
      return { ...state, search: action.payload };
    default:
      return state;
  }
};
