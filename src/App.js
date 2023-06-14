import axios from "axios";
import React from "react";
import "./App.css";
import Search from "./components/users/Search";
import Users from "./components/users/Users";
import Navbar from "./layout/Navbar";

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
      <div className="App">
        <Navbar />
        <div className="container">
          <Search searchUsers={this.searchUsers} />
          <Users usersData={this.state.usersData} />
        </div>
      </div>
    );
  }
}

export default App;
