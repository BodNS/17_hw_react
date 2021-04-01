import "./App.css";
import React, {useState} from "react";
// import users from "./data/users.json";
import UserList from "./components/UserList";


function App() {

  // const [users, setUsers] = useState([]);

  fetch("./data/users.json")
  .then(response => response.json())
  .then(printUsers)
  .catch(console.error);

  function printUsers (users) {
    users.forEach((u) => {
      console.log(u)
    })
  }

 render () {
   const {users} = 
    return (
      

     <UserList users={users}/>
  );
    }
}
export default App;