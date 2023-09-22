import React from 'react'
import Todo from '../assets/direct-hit.png'
import fire from '../assets/fire.png'
import "./TaskColumn.css"
import TaskCard from './TaskCard'
const TaskColumn = ({title,icon,tasks,status,HandleDelete}) => {
  return (
    <section className='task_column'>
        <h2 className='task_column_heading'><img className='task_column_icon' src={icon} alt="" /> {title}</h2>

        {
        tasks.map((task,index) => task.status === status && <TaskCard key={index} title={task.task} tags={task.tags} HandleDelete={HandleDelete} index={index}/>) 
        }
        
    </section>
  )
}
export default TaskColumn;