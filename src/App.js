import { useState } from 'react';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {

  const [tasks, setTasks] = useState([{ id: 1, name: "t1", day: "d1", important: true }, { id: 2, name: "t2", day: "d2", important: false }])

  const addTask = (task) => {
    const id = Math.ceil(Math.random() * 100000)
    const newTask = { ...task, id }
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleImportant = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, important: !task.important } : task))
  }

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? <Tasks onDelete={deleteTask} onToggle={toggleImportant} tasks={tasks} /> : 'No Tasks Available'}
    </div>
  );
}

export default App;
