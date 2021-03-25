import "./App.css";
import React, { Component } from "react";
import UserList from "./components/UserList";

const users = JSON.parse(users);

const App = () => {
  <UserList  users={users} />
}

export default App;
