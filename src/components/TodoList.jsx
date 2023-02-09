import React,{useState} from 'react'
import ToDo from './ToDo'
const TodoList = ({toDoList}) => {
  let storage = JSON.parse(localStorage.getItem('todos'))
  const consola = () =>{
    console.log(storage)
    console.log(storedTodos)


    
    
  }

  const [storedTodos, setStoredTodos] = useState(storage)
  //setStoredTodos(storage)
  return (
    
    <div>
        <button onClick={()=>consola()}>click</button>
        {storage.map((todo)=>{
            return <ToDo todo={todo.task} key={todo.id}></ToDo>
        })}
    </div>
  )
}

export default TodoList