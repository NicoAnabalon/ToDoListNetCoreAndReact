import axios from "axios"

const BASE_URL_API = 'https://localhost:44356/api'
const TODO_URL = `${BASE_URL_API}/ToDo`

export const getAllToDos = async () => {
    const response = await axios.get(`${TODO_URL}`);
    return response;
}

export const changeToDoStatus = async (id, payload) => {
    const response = await axios.put(`${TODO_URL}/${id}`, payload);
    return response;
}

export const postNewToDo = async (payload) => {
    const response = await axios.post(`${TODO_URL}`, payload);
    return response;
}

export const deleteSpecificToDo = async (payload) => {
    const response = await axios.delete(`${TODO_URL}/${payload}`, payload);
    return response;
}