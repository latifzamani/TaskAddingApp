import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "./taskitem";

const TaskList=()=>{
    const filteredTasks=useSelector((state)=>{
        const tasks=state.task;
        const filter=state.filter;
        const searchTerm=state.searchTerm;
        // console.log(state.task[1].text);

        return tasks.filter((task,index)=>{
            const matchFilters=(filter==="completed" && task.completed) ||
            (filter==='incompleted' && !task.completed) ||
            (filter==='all');

            const matchSearch=tasks[index].text.toLowerCase().includes(searchTerm);
            // const matchSearch={searchTerm};
            // console.log(searchTerm);
            // console.log(tasks[index].text);
            return matchFilters && matchSearch
        })
    });
    return(
        <div className="" style={{maxHeight:'300px',overflow:'scroll',scrollbarWidth:'none'}}>
        <ul>
            <li className=" float-left  text-gray-500">Tasks that are added...</li><br></br>
            {
                filteredTasks.map((task,index)=>(
                   <TaskItem key={index} task={task} index={index}/>

                ))
            }
            
        </ul>
        </div>
    )
}
export default TaskList;