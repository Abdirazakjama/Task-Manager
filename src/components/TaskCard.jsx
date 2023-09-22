import React from 'react'
import "./TaskCard.css"
import Tag from './Tag'
import deleteIcon from '../assets/delete.png'

const TaskCard = ({title,tags,HandleDelete,index}) => {
  return (
   <article className='task_card'>
    <p className='task-text'>{title}</p>
    <div  className='task_card_bottom_line'>
        <div className='taskc_card_tags'>
           {
            tags.map((tag,index) => <Tag key={index} tagName={tag} selected={true}/>)
           }
        </div>
        <div className='task_delete' onClick={ ()=> HandleDelete(index)}>
            <img src={deleteIcon} className='delete_Icon' alt="" />
        </div>
    </div>
   </article>
  )
}

export default TaskCard