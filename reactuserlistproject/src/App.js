import React, { useState } from 'react'
import AddUser from "./components/users/AddUser"
import UserList from "./components/users/UserList"

function App(props) {

  // App has access to both AddUser and UserList components
  const [usersList, setUsersList] = useState([]);

  const addNewUser = (username, age) => {
    // We want the old state so we have to use this anonymous function form
    setUsersList((existingState) => {
      return [...existingState, { name: username, age: age, id: Math.random().toString() }]
    })
  }

  return (
    <div className="App">
      <AddUser onAddUser={addNewUser} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
