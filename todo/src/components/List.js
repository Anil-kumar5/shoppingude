import React from 'react';
import ToDoList from './ToDoLists';

 function List({todo,setTodo,filtered}){
    return(
        <div className="todolistcontainer">
          <ul className="todolist">
            {
                filtered.map(todos=>(
                    <ToDoList text={todos.text} key={todos.id} todo={todo} todos={todos} setTodo={setTodo}/>
                ))
            }
            
          </ul>
        </div>
    )
}

export default List