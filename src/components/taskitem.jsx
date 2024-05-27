import { FaToggleOff, FaToggleOn, FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { RemoveTask, ToggleTask } from '../redux/actions';


const TaskItem = ({ index, task }) => {
    
    const dispatch=useDispatch();
//    const handleToggle=()=>{
//          dispatch(ToggleTask(index));
//          console.log('Toggle');
//     }
    return (
        <li className=" flex flex-col border-b-2 border-black m-2 p-2">
            <div className=" flex flex-row float-start ">
                <span className=" font-bold mr-2">{index + 1}</span>
                <span className={` ${task.completed ? 'line-through text-gray-800' : ''}`}>{task.text}</span>

                <div className=' space-x-3  ml-8'>
                    <button onClick={()=>dispatch(ToggleTask(index))} className=''>
                        {task.completed ? <FaToggleOff /> : <FaToggleOn />}
                    </button><span>  </span>
                    <button onClick={()=>dispatch(RemoveTask(index))} className=''>
                        <FaTrash/>
                    </button>
                </div>
            </div>
        </li>
    )
}
export default TaskItem;