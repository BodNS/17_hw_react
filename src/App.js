import "./App.css";
import React from "react";
import users from "./data/users.json";
import UserList from "./components/UserList";


function App() {

    return (
      

      // <div>{users.forEach((u) => console.log(u))}</div>
    
      <UserList users={users}/>
    
  );
}
export default App;