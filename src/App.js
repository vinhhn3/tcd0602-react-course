import React from "react";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Search from "./components/users/Search";
import Users from "./components/users/Users";
import GithubState from "./context/github/githubState";
import Navbar from "./layout/Navbar";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import User from "./pages/User";

const App = () => {
  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/">
                <>
                  <Search />
                  <Users />
                </>
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/user/:loginId">
                <User />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
