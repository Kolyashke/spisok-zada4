import React from 'react'
import TodoListItem from './todo-liist-item'



const TodoList=({todos, onDeleted, onToggleDone, onToggleImportant})=>{
    //const items=['Покушать', 'Позвонить бабушке', 'Почистить компьютер']

    const element=todos.map((item)=>
    {
        const {id,...itemProps}=item;
        return( 
            <li key={id} className="list-group-item"> 
                <TodoListItem {...itemProps}
                onDeleted={()=>onDeleted(id)}
                onToggleDone={()=>onToggleDone(id)}
                onToggleImportant={()=>onToggleImportant(id)}      
                />
            </li>
        )
    })

    return (
        <ul className="list-group">
            {element}
        </ul>
    )
}

export default TodoList;