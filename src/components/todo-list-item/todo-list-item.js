import React, {Component} from 'react'
import "./todo-list-item.css"


export default class TodoListItem extends Component{

    render(){

        const {label, onDeleted, onToggleDone, onToggleImportant, done, important} = this.props

        let classNames = 'todo-list-item-label'
        if(done){
            classNames += ' done'
        }
        if(important){
            classNames += ' important'
        }
        

        return (
            <span className={classNames} >
                <div onClick={onToggleDone}>{label}</div>
                    <div className="wrapper_button" >
                        <button type="button"  className="btn btn-outline-success btn-sm float-right"
                            onClick={onToggleImportant} > 
                            <i className="fa fa-exclamation"></i>
                        </button>
                        <button type="button"  className="btn btn-outline-success btn-sm float-right" onClick={onDeleted}> 
                        <i className="fa fa-trash" ></i>
                        </button>
                    </div>
            </span>
        )
    }
}



