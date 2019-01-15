import React, { Component } from 'react'
import { changeStatus, deleteTask } from '../actions/tasks'
import '../styles/TodoList.css'
import 'font-awesome/css/font-awesome.css'

class TodoList extends Component {
    toggle = () => {
        changeStatus(this.props.id)
    }

    deleteTask = (e) => {
        e.preventDefault()
        deleteTask(this.props.id)
    }

    render() {
        if (this.props.completed) {
            return (
                <div key={this.props.id} className="taskcontain">
                    <div onClick={this.toggle} className="innertask">
                        <span className="done"><i className="fa fa-check-circle"></i>{this.props.task}</span>
                        <button onClick={this.deleteTask} className="delButton"><i className="fa fa-times"></i></button>
                    </div>
                </div>
            )
        } else {
            return (
                <div key={this.props.id} className="taskcontain">
                    <div onClick={this.toggle} className="innertask">
                        <span><i className="fa fa-circle"></i>{this.props.task}</span>
                        <button onClick={this.deleteTask} className="delButton"><i className="fa fa-times"></i></button>
                    </div>
                </div>
            )
        }
    }
}

export default TodoList