import { combineReducers } from "redux"; 
import {configureStore} from "@reduxjs/toolkit"
//combineReducers 리덕스에서 제공하는 함수 
import counter from "./counter";
import todos from "./todos";

const store = configureStore({reducer : todos})

store.dispatch(() => {
  return {
    type: 'todos/CHANGE_INPUT'
  }
})
console.log(store.getState())
const rootReducer = combineReducers({
    // counter,
    todos,
})

export default rootReducer;
