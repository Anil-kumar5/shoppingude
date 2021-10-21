import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
function ToDoList({text,todos,setTodo,todo}){
    const onDeleteHandler = () =>{
        setTodo(todo.filter((el)=>el.id!==todos.id));
    }
    const onCheckHandler = () =>{
        setTodo(todo.map((item)=>{
            if(item.id===todos.id){
                return {
                    ...item,completed:!item.completed
                }
            }
            return item
        }))
    }
    return(
      <div>
         
          <li className={`todo-list ${todos.completed?"completed":""}`}> 
              {/* {  
                  todo.map(todoser=>{
                      return <div key={todoser.id}>{todoser.text}</div>
                  })
              } */}
             {text}
              </li>
          <button onClick={onCheckHandler} >< CheckIcon/></button>
          <button onClick={onDeleteHandler}><DeleteIcon/></button>
      </div>
    )
}

export default ToDoList