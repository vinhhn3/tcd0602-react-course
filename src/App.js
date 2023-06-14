import axios from "axios";
import React from "react";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Search from "./components/users/Search";
import Users from "./components/users/Users";
import Navbar from "./layout/Navbar";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import User from "./pages/User";

class App extends React.Component {
  state = {
    usersData: [],
    searchText: "",
  };

  searchUsers = (text) => {
    this.setState({ searchText: text });
    axios
      .get(`https://api.github.com/search/users?q=${text}`)
      .then((response) => {
        this.setState({ usersData: response.data.items });
      });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/">
                <>
                  <Search searchUsers={this.searchUsers} />
                  <Users usersData={this.state.usersData} />
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
    );
  }
}

export default App;
