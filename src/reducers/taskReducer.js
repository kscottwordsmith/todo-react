const initialState = {
    tasks: [],
    filter: "all"
}

export default function (state = initialState, action) {
    switch (action.type) {
        case "ADD_TASK":
            return {...state, tasks: [...state.tasks, action.payload]}
        case "TOGGLE_STATUS":
            return {...state, tasks: state.tasks.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo)}
        case "DELETE_TASK":
            return {...state, tasks: state.tasks.filter(todo => todo.id !== action.payload)}
        case "CHANGE_FILTER":
            return {...state, filter: action.payload}
        case "DELETE_COMPLETE":
            return {...state, tasks: state.tasks.filter(todo => !todo.completed)}
        default:
            return state
    }
}