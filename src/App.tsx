import {useState} from 'react';
import './App.css';

import { Task } from './interfaces/Task';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import {TbBrandTypescript} from 'react-icons/tb'
import {FaReact} from 'react-icons/fa'
import {useEffect} from 'react'

interface Props {
  title?: string
}

function App({title}: Props) {
  const [showMsg, setshowMsg] = useState<boolean>(false)

  const [tasks, setTasks] = useState<Task[]>([
  ]);
const CreateNewId = ():number=>{
  const NewId = new Date().getTime();

  return NewId
}
const addANewTask = (task:Task)=>{
 
  setTasks([...tasks,{...task,id:CreateNewId(),completed:false}])
}
const DeleteTask =(id:number)=>{
  setTasks(tasks.filter(task=>task.id!== id));
}
const SetAsAdone=(id:number)=>{
  const tasksUpdate = [...tasks];
const ObjIndex:number = tasksUpdate.findIndex(item=>item.id===id);

tasksUpdate[ObjIndex].completed = true;

setTasks([...tasksUpdate]);

}


useEffect(() => {
  const StorageCheck = localStorage.getItem('tasks');
  if(StorageCheck){
    console.log('si hay ')
    const StorageTasks = JSON.parse(localStorage.getItem("tasks") || "");
    console.log(StorageTasks)
    setTasks(StorageTasks);
    console.log(tasks)
  }else{
    console.log('no hay ')
    return
  }
}, [])
useEffect(() => {

    localStorage.setItem('tasks',JSON.stringify(tasks));
    
 console.log(tasks)
}, [tasks])

  return (
    <div className="bg-dark" style={{minHeight: '100vh'}}>
      <nav className='navbar navbar-dark bg-dark p-3'>

        <div className="container">
          <a href="/" className='navbar-brand'>
          <h1>App tareas <FaReact className='m-1'/>+<TbBrandTypescript className='m-2'/></h1>
          </a>
        </div>
      </nav>
      <div className={`alert alert-dismissible alert-secondary ${showMsg? 'd-none' : 'd-block'}`}  onClick={()=>showMsg ? setshowMsg(showMsg) : setshowMsg(!showMsg)}>
  <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
  <strong>Bienvenido/a!</strong> Esta es una simple App con un crud de tareas, hecho con <b>React</b> , <b>TypeSript</b> y <b>Boostrap</b> <br /> 
  <a href="" className="alert-link">Clica aqui para ir al respositorio</a>.
</div>
      <main className="container p-1">
        <div className="row">
        <div className="col-md-4 text-info">
         <TaskForm addANewTask={addANewTask}/>
        </div>
        <div className="col-md-8">
          <div className="row">
              <TaskList tasks={tasks} MarkDone={SetAsAdone} DeleteTask={DeleteTask}/>
              </div>
        </div>
        </div>
       
   
   
      </main>
  
    </div>
  );
}

export default App;
