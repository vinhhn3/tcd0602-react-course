import { useReducer } from "react";
import { getUserByLogin, getUsers } from "../../api/GithubApi";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
const GithubState = (props) => {
  const initialState = {
    usersData: [],
    user: {},
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const searchUsers = async (text) => {
    const result = await getUsers(text);
    dispatch({
      type: "SEARCH_USERS",
      payload: result.data.items,
    });
  };

  const getUser = async (loginId) => {
    const response = await getUserByLogin(loginId);
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
