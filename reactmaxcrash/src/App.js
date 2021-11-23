import React from 'react'
import Todos from "./components/Todos"

function App() {
  return (

    <div>
      <h1>My Todos</h1>
      <Todos text="Learn React" />
      <Todos text="Master React" />
      <Todos text="Explore the full react course" />
    </div>


  );
}

export default App;
