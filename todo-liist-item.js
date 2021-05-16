import React from 'react'
import './todo-liist-item.css';

class TodoListItem extends React.Component
{


    render() { 
        const {label,onDeleted, onToggleDone, onToggleImportant, done, important}=this.props;
        let classNames="item-list-base";
        if (done){
            classNames+=" done";
        }
        if (important){
            classNames+=" important";
        }
            return (
                
            <span className={classNames}>
                <span 
                onClick={onToggleDone}> 
                {label} </span>
                <button type="button" className="btn btn-outline-success float-right" onClick={onToggleImportant}>  <i className="fa fa-exclamation"/> </button>
                <button type="button" className="btn btn-outline-danger float-right" onClick={onDeleted}> <i className="fa fa-trash"/> </button>
            </span>    
                )

        }
}

export default TodoListItem;