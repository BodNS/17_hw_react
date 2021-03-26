import "./App.css";
import React, { Component } from "react";
import UserList from "./components/UserList";

fetch("../src/data/users.json")
  .then(response => response.json())
  .then(users => alert(users));
  

const App = () => {
  <UserList  users={users} />
}

export default App;
