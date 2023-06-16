import React from "react";
import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import GithubState from "./context/github/githubState";
import Body from "./layout/Body";
import Navbar from "./layout/Navbar";

const App = () => {
  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar />
          <Body />
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
