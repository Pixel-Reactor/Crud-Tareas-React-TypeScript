import {AiOutlinePlus} from 'react-icons/ai'
import { ChangeEvent, FormEvent, useState,useRef } from 'react'
import { Task } from '../interfaces/Task';

type HandleInputChange = ChangeEvent<HTMLInputElement|HTMLTextAreaElement>
interface Props {
    addANewTask: (task:Task)=>void;
}
const initialState = {
    title:'',
    description:''}
export default function TaskForm({addANewTask}:Props) {
    const [task, settask] = useState(initialState);
    const inputTitle = useRef<HTMLInputElement>(null)

    const HandleChange = (e: HandleInputChange ) =>{
        settask({
            ...task,
            [e.target.name]:e.target.value
        })
    }
    const HandleNewTask = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        addANewTask(task);
        settask(initialState);
        inputTitle.current?.focus();
    }
  return (
    <div className="card card-body bg-secundary text-dark mb-3">
        <h1>Añadir tarea</h1>
        <form onSubmit={HandleNewTask}>
            <input 
             type="text"
             placeholder="Título" 
             name="title" 
             className="form-control mb-3 rounded-0 shadow-sm border-0"
             value={task.title} 
             onChange={HandleChange}
             ref={inputTitle}
             required={true}
             />
              <textarea 
      name="description" 
      rows={2} 
      placeholder="Descripción" 
      className="form-control mb-3 shadow-sm border-0"
      value={task.description} 
      onChange={HandleChange}
      ></textarea>
    
    <button className="btn btn-primary" disabled={task.title? false : true} style={{width:'100%'}}>Guardar <AiOutlinePlus/></button>
        </form>
    
    </div>
  )
}
