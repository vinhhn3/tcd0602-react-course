import React from "react";
import "./App.css";
import Users from "./components/users/Users";
import Navbar from "./layout/Navbar";

class App extends React.Component {
  // Properties => state
  state = {
    fullName: "Vinh Hoang",
    age: 30,
    gender: "male",
    email: "nnheo@example.com",
    phone: "0987654321",
    address: "Vietnam",
  };

  // Methods
  increaseAge = () => {
    this.setState({
      age: this.state.age + 1,
    });
  };
  render() {
    return (
      <div className="App">
        <Navbar />
        <Users />
      </div>
    );
  }
}

export default App;
