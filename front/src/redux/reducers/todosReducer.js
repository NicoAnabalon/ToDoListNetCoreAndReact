import { changeToDoStatus, getAllToDos } from "../../services/api"

export const GET_TODOS = "GET_TODOS"
export const CHANGE_TODO_STATUS = "CHANGE_TODO_STATUS"

export const allTodos = () => {
    return async dispatch => {
        try {
            const {data} = await getAllToDos()
            dispatch({type: GET_TODOS, payload: data})
        } catch (error) {
            console.log(error)
        }
    }
}

export const changeStatus = (id, payload) => {
    return async dispatch => {
        try {
            const {data} = await changeToDoStatus(id, payload)
            dispatch({type: CHANGE_TODO_STATUS, payload: data})
        } catch (error) {
            console.log(error)
        }
    }
}

const todosReducer = (state = {}, action) => {
    switch(action.type) {
        case GET_TODOS:
            return {...state, todos: action.payload}
        case CHANGE_TODO_STATUS:
            const newTodos = state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo);
            return {...state, todos: newTodos}
        default:
            return state
    }
}

export default todosReducer