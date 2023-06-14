import React, { Component } from "react";

export class Search extends Component {
  state = {
    text: "",
  };

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.searchUsers(this.state.text);
  };

  render() {
    return (
      <div>
        <form className="form">
          <input
            type="text"
            placeholder="Search GitHub User"
            onChange={this.handleChange}
          />
          <input
            type="submit"
            className="btn btn-dark btn-block"
            value="Search"
            onClick={this.handleSubmit}
          />
        </form>
      </div>
    );
  }
}

export default Search;
