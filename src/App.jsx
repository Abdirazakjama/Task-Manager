import React, { useEffect, useState } from 'react'

import "./App.css"

import TaskColumn from './components/TaskColumn.jsx'
import TodoIcon from "./assets/direct-hit.png"
import doingIcon from './assets/glowing-star.png'
import doneIcon from './assets/check-mark-button.png'
import TasksForm from './components/TasksForm'

const oldTasks = localStorage.getItem("tasks")

const App = () => {
  const [tasks,setTasks] = useState(JSON.parse(oldTasks))

  useEffect(() =>{
    localStorage.setItem("tasks",JSON.stringify(tasks))
  },[tasks])

  const HandleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task,index) => index !== taskIndex)
    setTasks(newTasks)
  }
  return (
    <div className='app'>
      <TasksForm setTasks={setTasks}/>
      <main className='app_main'>
       <TaskColumn title="To do" icon={TodoIcon} tasks={tasks} status="todo" HandleDelete={HandleDelete}/>
       <TaskColumn title="Doing" icon={doingIcon}  tasks={tasks} status="doing" HandleDelete={HandleDelete}/>
       <TaskColumn title="Done" icon={doneIcon}  tasks={tasks} status="done" HandleDelete={HandleDelete}/>
       
      </main>
    </div>
  )
}

export default App