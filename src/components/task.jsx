import React from "react";
import { useState } from "react";
import { BsPlus, BsSearch } from 'react-icons/bs';
import { useDispatch } from "react-redux";
import { AddTask, UpdateSearch } from "../redux/actions";
import FilterBtns from "./filterbtns";
import TaskList from "./taskList";
const Task = () => {
    const dispatch = useDispatch();
    const [newTask, setNewtask] = useState("");
    const [newSearchTerm, setnewSearchTerm] = useState("");
    // console.log(newTask);
    const DispatchAdding = (text) => {
        dispatch(AddTask(text));
    }
    const AddingTask = () => {
        if (newTask.trim() !== '') {
            DispatchAdding(newTask.trim());
            setNewtask("");
        }
    }

    const handleSearch = (searchTerm) => {
        setnewSearchTerm(searchTerm);
        dispatch(UpdateSearch(searchTerm));
    }
    return (
        <div className="max-w-4xl mx-auto sm:mt-8 p-4  opacity-90 rounded " style={{backgroundColor:"rgb(130,183,205)"}}>
            <h1 className="text-3x m-5">Task Management</h1>
            {/* input,click */}
            <div className="flex items-center mb-4">
                <input type="text" value={newTask} onChange={(e) => (setNewtask(e.target.value))} name="taskInput" id="taskInput" placeholder="Add Task"
                    className="flex-grow p-2 border-b-2 focus:outline-none focus:border-blue-400" />
                <button onClick={AddingTask} className="ml-4 p-2 bg-white rounded border-b-2  focus:bg-green-200 border-white-100"><BsPlus /></button>
            </div>

            {/* search btn */}

            <div className="flex item-center justify-between mb-4">
                {/* Filter Buttons */}
              <FilterBtns/>
                <input type="text" value={newSearchTerm} onChange={(e)=>( handleSearch(e.target.value))} name="taskInput" id="taskInput" placeholder="Search..."
                    className=" ml-24 flex flex-grow rounded justify-end float-right mr-0 p-2 border-b-2 focus:outline-none focus:border-blue-400 w-1/4" />
                <button className="ml-4 p-2 bg-white rounded border-b-2  focus:bg-green-200 border-white-100"><BsSearch /></button>

            </div>

            {/* TaskList */}

            <TaskList/>
        </div>
    );
};

export default Task;