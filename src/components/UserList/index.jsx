import React from "react";
import UserItem from "../UserItem";

const UserList = (props) => {
    const users = props;
    /* const UserItems =  */users.forEach(user => 
    console.log (user) 
        // <UserItem key={user.id} user={user} />
    ) 
    return (
      <ul> UserItems  </ul>
    )
}

export default UserList;