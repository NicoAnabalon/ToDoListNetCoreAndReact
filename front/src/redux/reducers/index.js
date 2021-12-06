import { combineReducers } from "redux";
import todosReducer from "./todosReducer";

const MainReducer = combineReducers({
    todos: todosReducer
});

export default MainReducer