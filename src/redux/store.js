import { legacy_createStore as createStore,applyMiddleware } from "redux";
import TaskReducer from "./reducer";
import logger from "redux-logger";
const middlewares=[logger];
const store=createStore(TaskReducer,applyMiddleware(...middlewares));
export default store;


/*
store design
 1-
 [
    {
        id:1, description:'hello',
    },
    {....},{....}
 ]

 max:App
 2- {
    bug:[
        {
            id:2,description:'hello2'
        },
        {....}
    ],
    currentUser:{}
 }
*/ 