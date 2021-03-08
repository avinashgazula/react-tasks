import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/About';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {

  const [showAddForm, setShowAddForm] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {

    const getTasksFromServer = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasksFromServer()
  }, [])

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:8000/tasks')
    const data = await res.json()

    return data
  }

  const addTask = async (task) => {

    const res = await fetch('http://localhost:8000/tasks', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(task)
    })

    const newTask = await res.json()
    setTasks([...tasks, newTask])
  }

  const toggleShowAddForm = () => {
    setShowAddForm(!showAddForm)
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:8000/tasks/${id}`, { method: 'DELETE' })
    setTasks(tasks.filter(task => task.id !== id))
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:8000/tasks/${id}`)
    const data = await res.json()

    return data
  }

  const toggleImportant = async (id) => {

    const currentTask = await fetchTask(id)
    const updatedTask = { ...currentTask, important: !currentTask.important }

    const res = await fetch(`http://localhost:8000/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(updatedTask)
    })

    const data = await res.json()

    setTasks(tasks.map(task => task.id === id ? { ...task, important: data.important } : task))
  }

  return (
    <Router>
      <div className="container">
        <Header onToggle={toggleShowAddForm} showAddForm={showAddForm} />
        <Route
          path='/'
          exact
          render={(props) => (
            <>
              {showAddForm && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? <Tasks onDelete={deleteTask} onToggle={toggleImportant} tasks={tasks} /> : 'No Tasks Available'}
            </>
          )}
        />

        <Route path="/about" component={About} />

        <Footer />
      </div>
    </Router>

  );
}

export default App;
