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

  return (
    <div className="container">
      <Header title="Hello" />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
