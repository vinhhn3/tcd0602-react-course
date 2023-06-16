import { useReducer } from "react";
import GithubApi from "../../api/GithubApi";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
const GithubState = (props) => {
  const initialState = {
    usersData: [],
    user: {},
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const searchUsers = async (text) => {
    const result = await GithubApi.getUsers(text);
    dispatch({
      type: "SEARCH_USERS",
      payload: result.data.items,
    });
  };

  const getUser = async (login) => {
    const response = await GithubApi.getUserByLogin(login);
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
