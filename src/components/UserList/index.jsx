import React from "react";
import UserItem from "../UserItem";

const UserList = (props) => {
    const users = props;
    console.log(users);
    /* const UserItems =  */Array.from(users).forEach(user => 
    console.log (user) 
        // <UserItem key={user.id} user={user} />
    ) 
    return (
      <ul> UserItems  </ul>
    )
}

export default UserList;