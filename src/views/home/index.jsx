import TaskForm from "../../components/Taskform";
import TaskList from "../../components/Tasklist";
import Header from "../../components/header";
import { useState } from "react";

function Home() {

  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    if(text.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text,
      completed:false
    };

    setTasks([newTask, ...tasks]);
  };

  return (
    <main>

      <Header />

      <h1>
        Lista de tareas de Luca
      </h1>

      <TaskForm addTask={addTask}/>

      <TaskList tasks={tasks}/>

    </main>
  );

}

export default Home;