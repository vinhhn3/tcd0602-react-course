import React, { useContext, useState } from "react";
import GithubContext from "../../context/github/githubContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const [text, setText] = useState("");
  const { searchUsers } = githubContext;
  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchUsers(text);
  };

  return (
    <div>
      <form className="form">
        <input
          type="text"
          placeholder="Search GitHub User"
          onChange={handleChange}
        />
        <input
          type="submit"
          className="btn btn-dark btn-block"
          value="Search"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default Search;
