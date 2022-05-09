import React from 'react'
import { useState } from 'react'

const AddTask = ({onAdd}) => {

  const [texto, setText] = useState('');
  const [fecha, setDate] = useState('');
  const [terminado, setFinished] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    if(!texto)
    {
      alert("Por favor escribe la descripción de la tarea");
      return
    }
    if(!fecha)
    {
      alert("Por favor escribe una fecha para la tarea");
      return
    }
    onAdd ({texto, fecha, terminado});
    setText('');
    setDate('');
    setFinished(false);
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Tareas:</label>
        <input type="text" placeholder='Agrega una tarea' value={texto} onChange={(event) => setText(event.target.value)}/>
      </div>
      <div className='form-control'>
        <label>Fecha:</label>
        <input type="text" placeholder='Agrega la fecha' value={fecha} onChange={(event) => setDate(event.target.value)}/>
      </div>
      <div className='form-control-check'>
        <label>Terminada:</label>
        <input type="checkbox" checked={terminado} value={terminado} onChange={(event) => setFinished(event.currentTarget.checked)}/>
      </div>
      <input type="submit" className='btn btn-block' value='Agregar tarea'/>
    </form>
  )
}

export default AddTask