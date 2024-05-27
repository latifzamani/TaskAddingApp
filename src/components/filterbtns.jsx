import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FilterTasks, MarkAllcomplete } from "../redux/actions";

const FilterBtns=()=>{

    const dispatch=useDispatch();
    const currentFilter=useSelector((state)=>(state.filter));

    const handleFilter=(filter)=>{
        dispatch(FilterTasks(filter));
    }

    const handleMarkAll=()=>{
        dispatch(MarkAllcomplete());
    }
return(
    <div className="flex space-x-4 items-center">
        <select className=" text-sm px-2 py-1 rounded border border-gray-300"
         onChange={(e)=>handleFilter(e.target.value)}
        >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incompleted">Incompleted</option>
        </select>

        <button className=" bg-green-200 rounded p-2"
        onClick={handleMarkAll}
        >Mark all complete ✔</button>
    </div>
)};

export default FilterBtns;