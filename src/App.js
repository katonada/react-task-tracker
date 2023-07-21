import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
      {
          id: 1,
          text: 'Doctor',
          day: "05. Feb at 8:00",
          reminder: true
      },
      {
          id: 2,
          text: 'School meeting',
          day: "06. Feb at 14:45",
          reminder: true
      },
      { id: 3,
          text: 'Shopping',
          day: "05. Feb at 17:00",
          reminder: false
      }
  ])

  const addTask = (task) => {
      const id = Math.floor(Math.random() * 1000000) + 1
      const newTask = {id, ...task}
      setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (

    <div className="container">

      <Header
        title="Hello"
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />

      {showAddTask && <AddTask onAdd={addTask}/>}

      {tasks.length > 0
        ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
        : 'No tasks'}

    </div>
  );
}

export default App;
