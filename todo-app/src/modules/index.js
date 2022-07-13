import { combineReducers } from "redux"; 
//combineReducers 리덕스에서 제공하는 함수 
import counter from "./counter";
import todos from "./todos";

const rootReducer = combineReducers({
    counter,
    todos,
})

export default rootReducer;
