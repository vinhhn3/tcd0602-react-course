import axios from "axios";
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Search from "./components/users/Search";
import Users from "./components/users/Users";
import Navbar from "./layout/Navbar";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import User from "./pages/User";

const App = () => {
  const [usersData, setUsersData] = useState([]);
  const [user, setUser] = useState({});

  const searchUsers = async (text) => {
    const result = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    setUsersData(result.data.items);
  };

  const getUser = async (loginId) => {
    const response = await axios.get(`https://api.github.com/users/${loginId}`);
    setUser(response.data);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <>
                <Search searchUsers={searchUsers} />
                <Users usersData={usersData} />
              </>
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/user/:loginId">
              <User user={user} getUser={getUser} />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
