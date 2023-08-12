import {Task} from '../interfaces/Task'
import TaskCard from './TaskCard';

interface Props{
   tasks: Task[];
   DeleteTask:(id:number)=>void;
   MarkDone:(id:number)=>void;
}
export default function TaskList({tasks,DeleteTask,MarkDone}:Props) {
  return (
    <>
    {tasks.map(task => 
    <div >  
       <TaskCard key={task.id} task={task} MarkDone={MarkDone} DeleteTask={DeleteTask}/>
       </div>
  
        )}
    </>
  )
}
