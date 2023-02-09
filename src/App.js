import { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';


function App() {
  const [toDoList, setToDoList] = useState([])
  const addTodo = (input) => {
    let copy = [...toDoList]
    copy = [...copy, {id: new Date().getTime().toString(), task: input, complete: false}]
    localStorage.setItem('todos',JSON.stringify(copy))
    
    
    setToDoList(copy)
  }
  //let storage = JSON.parse(localStorage.getItem('todos'))
  return (
    <div className="App">
      <TodoInput addTodo={addTodo} ></TodoInput>
      <TodoList toDoList={toDoList}></TodoList>
    </div>
  ); 
}

export default App;
