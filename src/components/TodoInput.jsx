import React,{useState, useRef} from 'react'

const Todo = ({addTodo}) => {
    const [todo, setTodo] = useState('')
    const inputRef = useRef()
    const handleTodo = (e) => {
        e.preventDefault()
        addTodo(todo)
        inputRef.current.value = ''
    }
  return (
    <div>
        <h1 >To-Do App</h1>
        <form onSubmit={handleTodo}>
            <input ref={inputRef}  type='text' ></input>
            <button onClick={()=>setTodo(inputRef.current.value)}>Add</button>
        </form>
        
    </div>
  )
}

export default Todo