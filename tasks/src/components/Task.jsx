import React from 'react'
import {FaTimes, FaTintSlash} from 'react-icons/fa' 

const Task = ({task, onDelete, onToggle}) => {
  return (
    <div className={`task ${task.terminado ? 'terminado': ''}`} onDoubleClick={() => onToggle(task.id)}>
        <h3>{task.texto} <FaTimes style={{color:"red", cursor: "pointer"}} onClick={() => onDelete(task.id)} /></h3>
        <p>{task.fecha}</p>
    </div>
  )
}

export default Task