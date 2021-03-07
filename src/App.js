import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {

  const [tasks, setTasks] = useState([{ id: 1, name: "t1", day: "d1" }, { id: 2, name: "t2", day: "d2" }])

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
