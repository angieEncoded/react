import Header from './components/Header'
import Footer from './components/Footer'
import TaskList from "./components/TaskList"
import AddTask from "./components/AddTask"
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import env from "react-dotenv";
import About from "./components/About"



// This is jsx - 
function App() {


  const [showAddTask, setShowAddTask] = useState(false);

  // What we want to call it, a function that will allow us to do something with it, and some default values
  const [tasks, setTasks] = useState([]);
  useEffect(() => {

    // Moved the function to pull the data outside of the useEffect in case it's needed somewhere else
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }

    getTasks();

  },[])

  // Fetch the tasks from the database
  const fetchTasks = async() =>{
    const res = await fetch(`http://localhost:${env.DBPORT}/tasks`);
    const data = await res.json();
    return data
  }

  const fetchSingleTask = async(id) =>{
    const res = await fetch(`http://localhost:3000/tasks/${id}`);
    const data = await res.json();
    return data
  }

  // Add a task
  const addTask = async (task) => {
    const newTask = {
      uuid: uuidv4(),
      ...task
    }
    console.log(newTask)
    const res = await fetch("http://localhost:8181/tasks",{
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newTask)
    })

    const data = await res.json();
    console.log(data)
    setTasks([...tasks, data])
  }

  // Delete a task
  const deleteTask = async (id) => {
    // Delete out of the database
    await fetch(`http://localhost:${env.DBPORT}/tasks/${id}`, {
      method: 'DELETE'
    })
  
    setTasks(tasks.filter(task =>
      task.id !== id
    ))
    // console.log('clicked', id);
  }

  // Toggle a reminder
  const toggleReminder = async (id) => {

    const taskToToggle = await fetchSingleTask(id);
    const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder}
    const res = await fetch(`http://localhost:${env.DBPORT}/tasks/${id}`, {
      method: "PUT",
      headers: {
        'Content-type': "application/json"
      }, 
      body: JSON.stringify(updatedTask)
    })

    const data = await res.json();



    // Map the object and for the task that we want to update set the reminder to the opposite of whatever it is
    setTasks(
      tasks.map(task => task.id === id ? { ...task, reminder: data.reminder } : task))

    console.log("reminder", id);
  }

  const cardWidth = {
    width: "25rem"
  }

  // const name = "Babs";
  // const x = true;

  return (
    <Router>
        <div className="container mt-5">
          <div className="row">
            <div className="col"></div>
            <div className="col">

              <div className="card" style={cardWidth}>
                <div className="card-body">
                  <h5 className="card-title">
                    <Header 
                    onAdd={() => setShowAddTask(!showAddTask)} 
                    changeButtonText={showAddTask}
                    />
                  </h5>
                  
                  <Route path="/" exact render={() => (
                  <>
                  {showAddTask && <AddTask onAdd={addTask} />}
                  {tasks.length > 0 ? (<TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ("Nothing to do!")}
                
                  </>
                  )} />







                </div>

                              
              
                <div className="card-footer text-center">
        
                <Route path="/about" component={About} />
                <Footer />
                </div>
                  
              </div>
            </div>
            <div className="col"></div>
          </div>
        </div>
    </Router>
  );
}

export default App;
