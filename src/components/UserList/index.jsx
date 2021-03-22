import React, { Component } from "react";
import UserItem from "../../components/UserItem";

const UserList = (props) => {
  const { users } = props;
  const UserItems = users.map(
    (user) => 
    <UserItem key={user.id} user={user} />
  );
    
  return <ul> {UserItems} </ul>;
};

export default UserList;






  
  /* function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      // Правильно! Ключ нужно определять внутри массива:
      <ListItem key={number.toString()} value={number} />
    );
    return (
      <ul>
        {listItems}
      </ul>
    );
  } */
  
  
    
    
