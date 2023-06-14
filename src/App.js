import React from "react";
import "./App.css";

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
        <h1>Hello World</h1>
        <h2>Full Name: {this.state.fullName}</h2>
        <h3>Address: {this.state.address}</h3>
        <h3>Age: {this.state.age}</h3>
        <button onClick={this.increaseAge}>Increase age</button>
      </div>
    );
  }
}

export default App;
