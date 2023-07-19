import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {

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
      {
          id: 3,
          text: 'Shopping',
          day: "05. Feb at 17:00",
          reminder: false
      }
  ])

  const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
  }

  return (

    <div className="container">
      <Header title="Hello" />
      {tasks.length > 0
        ? <Tasks tasks={tasks} onDelete={deleteTask}/>
      : 'No tasks'}
    </div>
  );
}

export default App;
