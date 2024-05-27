import * as actionType from './actionTypes';
const INITAILSTATE={
  task:[],
  filter:'all',
  searchTerm:'',
}
const TaskReducer=(state=INITAILSTATE,action)=>{
      switch(action.type){
        case actionType.ADD_TASK:
          return {
            task:[...state.task,{text:action.payload.text,completed:false}],
            filter:state.filter,
            searchTerm:state.searchTerm,
          }
        case actionType.TOGGLE_TASK:
          return{
            task:state.task.map((task,index)=>
            index===action.payload.id
            ?({...task,completed:!task.completed})
            :(task)
            ),

            filter:state.filter,
            searchTerm:state.searchTerm
          }
        case actionType.REMOVE_TASK:
          return {
            task:state.task.filter((task,index)=>
            index !==action.payload.id
            ),
            filter:state.filter,
            searchTerm:state.searchTerm
          }
        case actionType.MARK_COMPLETE:
          return {
            task:state.task.map((task,index)=>
            (index===action.payload.id) ?
            ({...task,completed:true}):
            (task)
            ),
            filter:state.filter,
            searchTerm:state.searchTerm

          }
        case actionType.MARK_INCOMPLETE:
          return {
            task:state.task.map((task,index)=>
            (index===action.payload.id) ?
            ({...task,completed:false}):
            (task)
            ),
            filter:state.filter,
            searchTerm:state.searchTerm

          }
        case actionType.FILTER_TASK:
          return{
            task:state.task,
            filter:action.payload.filter,
            searchTerm:state.searchTerm
          }

        case actionType.UPDATE_SEARCH_TERM:
          return {
            task:state.task,
            filter:state.filter,
            searchTerm:action.payload.searchTerm
          }

        case actionType.MARK_ALL_COMPLETE:
          return{
            task:state.task.map((task)=>([...task,{completed:true}])),
            filter:state.filter,
            searchTerm:state.searchTerm
          }



          default : return state
      }
}
export default TaskReducer;







/* 
reducer is a pure function
same input===same output
input---->current state,action
operation: copy state, does action
output---> update state, state
*/