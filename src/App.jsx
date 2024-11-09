import { useState } from 'react'
import HandleTodo from './HandleTodo'
import './App.css'

function App() {
  const [todos,setTodos] = useState([])
  const [item,setItem] = useState("")

  function handleChange(e){
    setItem(e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault();
    let newTodo = {
      id: new Date().getTime(),
      todo:item,
      completed:false
    }
    setTodos([...todos,newTodo])
    setItem("")
  }

 
  return (
    <>
        <form action="" onSubmit={handleSubmit}>
          <input type='text' onChange={handleChange} value={item}/>
          <input type='submit'/>
        </form>
    <HandleTodo todos={todos} setTodos={setTodos}/>
    </>
  )
}

export default App
