import React, { Component } from "react";
import UserItem from "./UserItem";

export class Users extends Component {
  state = {
    usersData: [
      {
        login: "mojombo",
        id: 1,
        avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
        url: "https://api.github.com/users/mojombo",
        html_url: "https://github.com/mojombo",
      },
      {
        login: "defunkt",
        id: 2,
        node_id: "MDQ6VXNlcjI=",
        avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
        html_url: "https://github.com/defunkt",
      },
      {
        login: "pjhyett",
        id: 3,
        avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
        url: "https://api.github.com/users/pjhyett",
        html_url: "https://github.com/pjhyett",
      },
    ],
  };
  render() {
    return (
      <div>
        {this.state.usersData.map((user) => (
          <UserItem user={user} />
        ))}
      </div>
    );
  }
}

export default Users;
