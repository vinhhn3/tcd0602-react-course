import axios from "axios";
import React from "react";
import "./App.css";
import Search from "./components/users/Search";
import Users from "./components/users/Users";
import Navbar from "./layout/Navbar";

class App extends React.Component {
  state = {
    usersData: [],
  };

  componentDidMount() {
    axios.get("https://api.github.com/users").then((response) => {
      this.setState({ usersData: response.data });
    });
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search />
          <Users usersData={this.state.usersData} />
        </div>
      </div>
    );
  }
}

export default App;
