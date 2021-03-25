import React, { Component } from "react";
import UserItem from "../UserItem";

const UserList = (props) => {
    const users = props;
    const UserItems = users.map((user) => 
        <UserItem key={user.id} user={user} />
    )
    return (
      <ul> {UserItems}  </ul>
    )
}

export default UserList;