import { Task } from "../interfaces/Task"
import {MdDeleteOutline,MdDone,MdOutlineDone} from 'react-icons/md'

interface Props {
    task : Task;
    DeleteTask:(id:number)=>void;
    MarkDone:(id:number)=>void;
}
export default function TaskCard({task,DeleteTask,MarkDone} : Props) {
  return (
    <div className="card  mb-3 shadow-light bg-white text-dark rounded ">
     <div className="card-header row justify-content-between p-3" style={{width:'100%'}}>
         <h4 className="card-title ">{task.title}</h4> 
         {task.completed ? 
          <span className="badge rounded-pill bg-success m-2 p-2" style={{width:'100px',height:'30px'}}>Completada</span> :     <span className="badge rounded-pill bg-light m-2 p-2" style={{width:'100px',height:'30px'}}>En curso</span> }
     
         </div>
     <div className="card-body ">
   
    <div className="card-text" style={{width:'100%'}}>
         <p>id:{task.id}</p> <p 
    className={task.description? 
    'text-primary-emphasis':'text-body-tertiary'}
    >{task.description? task.description : 'Sin descripción'}</p></div>
     <button 
    className="btn btn btn-secondary rounded mb-2" 
    style={{width:'100%'}} 
    onClick={()=>task.id && MarkDone(task.id)}>Terminada <MdDone/></button>
   
  
    
    <button 
    className="btn btn-danger rounded mb-0" 
    style={{width:'100%'}} 
    onClick={()=>task.id && DeleteTask(task.id)}>Borrar <MdDeleteOutline/></button>
   
  </div>
   
    
   
   
    
  </div>
  )
}
