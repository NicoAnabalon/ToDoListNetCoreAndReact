import { changeToDoStatus, deleteSpecificToDo, getAllToDos, postNewToDo, updateSpecificToDo } from "../../services/api"

export const GET_TODOS = "GET_TODOS"
export const CHANGE_TODO_STATUS = "CHANGE_TODO_STATUS"
export const POST_TODO = "POST_TODO"
export const DELETE_TODO = "DELETE_TODO"
export const UPDATE_TODO = "UPDATE_TODO"

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

export const postToDo = (payload) => {
    return async dispatch => {
        try {
            const {data} = await postNewToDo(payload)
            dispatch({type: POST_TODO, payload: data})
        } catch (error) {
            console.log(error)
        }
    }
}

export const deleteToDo = (payload) => {
    return async dispatch => {
        try {
            const {data} = await deleteSpecificToDo(payload)
            dispatch({type: DELETE_TODO, payload: data})
        } catch (error) {
            console.log(error)
        }
    }
}

export const updateToDo = (id, payload) => {
    return async dispatch => {
        try {
            const {data} = await updateSpecificToDo(id, payload)
            dispatch({type: UPDATE_TODO, payload: data})
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
        case POST_TODO:
            return {...state, todos: [...state.todos, action.payload]}
        case DELETE_TODO:
            const actualTodos = state.todos.filter(todo => todo.id === action.payload.id ? null : todo)
            return {...state, todos: actualTodos}
        case UPDATE_TODO:
            const updatedTodos = state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo)
            console.log(updatedTodos)
            return {...state, todos: updatedTodos}
        default:
            return state
    }
}

export default todosReducer