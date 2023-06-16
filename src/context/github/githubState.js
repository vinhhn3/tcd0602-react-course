import axios from "axios";
import { useReducer } from "react";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
const GithubState = (props) => {
  const initialState = {
    usersData: [],
    user: {},
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const searchUsers = async (text) => {
    const result = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    dispatch({
      type: "SEARCH_USERS",
      payload: result.data.items,
    });
  };

  const getUser = async (loginId) => {
    const response = await axios.get(`https://api.github.com/users/${loginId}`);
    dispatch({
      type: "GET_USER",
      payload: response.data,
    });
  };

  return (
    <GithubContext.Provider
      value={{
        usersData: state.usersData,
        user: state.user,
        searchUsers,
        getUser,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
