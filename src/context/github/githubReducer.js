import { SEARCH_USERS } from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state, // user: state,user
        usersData: action.payload, // usersData: result.data.items
      };
    default:
      return state;
  }
};
