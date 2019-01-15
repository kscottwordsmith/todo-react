import store from '../store'
import shortid from 'shortid'

export function addTask(task) {
    store.dispatch({
        type: "ADD_TASK",
        payload: {
            id: shortid.generate(),
            task: task,
            completed: false
        }
    })
}

export function changeStatus(id) {
    store.dispatch({
        type: "TOGGLE_STATUS",
        payload: id
    })
}

export function deleteTask(id) {
    store.dispatch({
        type: "DELETE_TASK",
        payload: id
    })
}

export function changeFilter(filter) {
    store.dispatch({
        type: "CHANGE_FILTER",
        payload: filter
    })
}