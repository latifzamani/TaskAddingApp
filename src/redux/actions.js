import * as actionType from './actionTypes';

export const AddTask=(text)=>{
    return{
    type:actionType.ADD_TASK,
    payload:{text},
}};

export const  ToggleTask=(id)=>({
    type:actionType.TOGGLE_TASK,
    payload:{id}
});

export const RemoveTask=(id)=>({
    type:actionType.REMOVE_TASK,
    payload:{id}
});

export const MarkComplete=(id)=>({
    type:actionType.MARK_COMPLETE,
    payload:{id}
});

export const MarkIncomplete=(id)=>({
    type:actionType.MARK_INCOMPLETE,
    payload:{id}
});
export const FilterTasks=(filter)=>({
    type:actionType.FILTER_TASK,
    payload:{filter}
});
export const UpdateSearch=(searchTerm)=>({
    type:actionType.UPDATE_SEARCH_TERM,
    payload:{searchTerm}
});
export const MarkAllcomplete=()=>({
    type:actionType.MARK_ALL_COMPLETE,
});






/*

Actions:
Add Task
Delete Task
Search

 all
complete
incomplete

filter
Toggle

mark all


1-
{
    type:"ADD_USER"   //ID ,Primary key
description: {
    id:2,...
}
}

2-Max:App
{
    type:"ADD_USER",
    payload:{
        description:{
            id:12,
        }
    }
}


*/