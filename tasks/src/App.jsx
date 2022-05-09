import { useState } from 'react'
import AddTask from './components/AddTask'
import Header from  './components/Header'
import Tasks from './components/Tasks'

function App() {

  const [viewForm, setViewForm] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      texto: 'Ir al cine',
      fecha: '02 de Febrero de 2022',
      terminado: true,
    },
    {
      id: 2,
      texto: 'Comprar en el supermercado',
      fecha: '10 de Febrero de 2022',
      terminado: false,
    },
    {
      id: 3,
      texto: 'Hacer app en React',
      fecha: '11 de Febrero de 2022',
      terminado: false,
    }
  ]);

  //Agregar una tarea
  const addNewTask = (task) => {
    // console.log(task);
    const id = Math.floor(Math.random()*10000)+1;
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }
  //Eliminar una tarea
  const deleteTask = (id) => 
  {
    // console.log("Borrar", id);
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Marcar tarea como terminada
  const finishTask = (id) => 
  {
    // console.log(id);
    setTasks(tasks.map((task) => task.id === id ? { ...task, terminado: !task.terminado}: task))
  }

  return(
    <section className='container'>
      <Header onAdd={()=>setViewForm(!viewForm)} viewStateForm={viewForm}/>
      {viewForm && <AddTask onAdd={addNewTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={finishTask}/> : 'No hay tareas por mostrar'}
    </section>
  )
}

export default App
