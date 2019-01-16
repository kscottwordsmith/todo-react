import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { addTask, changeFilter, deleteComplete } from '../actions/tasks'
import TodoList from './TodoList'
import '../styles/Tasks.css'


class Tasks extends Component {
    state = {
        todo: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if(this.state.todo.toLowerCase() === "beat up martin") {
            addTask("eat up martha")
        } else {
            addTask(this.state.todo)
        }
        this.setState({
            todo: ''
        })
    }

    filterAll = (e) => {
        e.preventDefault()
        changeFilter("all")
    }

    filterIncomplete = (e) => {
        e.preventDefault()
        changeFilter("incomplete")
    }

    filterComplete = (e) => {
        e.preventDefault()
        changeFilter("complete")
    }

    deleteComp = (e) => {
        e.preventDefault()
        deleteComplete()
    }

    render() {
        const tasks = this.props.tasks.map((t, i) => (
            <TodoList {...t} key={"listitem" + i}/>
        ))
        const totalActive = this.props.tasks.filter(t => !t.completed).length
        return (
            <Fragment>
                <h2>To-Do List</h2>
                <div id="topside">
                    <form onSubmit={this.handleSubmit} autoComplete="off">
                        <input 
                            type="text" 
                            onChange={this.handleChange} 
                            value={this.state.todo} 
                            placeholder="input task" 
                            name="todo"
                        />
                    </form>
                    {tasks}
                </div>
                <div id="bottomside">
                    <span id="activeNum">{totalActive} items left</span>
                    <button onClick={this.filterAll} className="filterButton">All</button>
                    <button onClick={this.filterIncomplete} className="filterButton">Incomplete</button>
                    <button onClick={this.filterComplete} className="filterButton">Complete</button>
                    <button onClick={this.deleteComp} className="filterButton">Clear Complete</button>
                </div>
            </Fragment>
        )
    }
}

function filterProps(appState) {
    if (appState.taskReducer.filter === "all") {
        return appState.taskReducer.tasks
    } else if (appState.taskReducer.filter === "incomplete") {
        return appState.taskReducer.tasks.filter(t => !t.completed)
    } else if (appState.taskReducer.filter === "complete") {
        return appState.taskReducer.tasks.filter(t => t.completed)
    }
}

function mapStateToProps(appState) {
    return {
        tasks: filterProps(appState)
    }
}

export default connect(mapStateToProps)(Tasks)