import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App= () => {

  const [tasks, setTasks] =useState([
      {
          id: 1, 
          text: 'Doctors Appointment',
          day: 'Feb 5th at 2:30pm', 
          reminder: true,
      },
      {
          id: 2,
          text: 'Meeting at School', 
          day: 'Feb 6th at 1:30pm', 
          reminder: true,
      },
      {
          id: 3, 
          text: 'Food Shopping', 
          day: 'Feb 5th at 2:30pm', 
          reminder: false,
      },
  ])

  //Delete a Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=>task.id!==id))
  }

  //Toggle Task based on Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task)=>task.id ===id ?
    {...task, reminder:!task.reminder} : task))
  }

  //Add a task to the List
  const addTask = (task) =>{
    const id = Math.floor(Math.random()*10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }


  return (
    <div className="container">
      <Header title='Task tracker' />
      <AddTask onAdd= {addTask}/>
      <Tasks tasks = {tasks} onDelete = {deleteTask}
       onToggle={toggleReminder} />
    </div>
  );
}

export default App;
