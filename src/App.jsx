import { useState,useReducer } from 'react'
import HandleTodo from './HandleTodo'
import './App.css'

function reducer(todos,action){

  switch(action.type){
    case'add':
    return   [...todos,add(action.payload.item)]
    case 'delete':
      return   [...todos].filter((todo)=>todo.id !==action.payload.id);
  }
}
function add(item){
  return  {
    id: new Date().getTime(),
    todo:item,
    completed:false
  }
}

function App() {
  // const [todos,setTodos] = useState([])
  const [item,setItem] = useState("")
  const [todos,dispatch]= useReducer(reducer,[])
  function handleChange(e){
   setItem(e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault();
    dispatch({type:'add',payload:{item:item}})
    setItem("")
  }

 
  return (
    <>
        <form action="" onSubmit={handleSubmit}>
          <input type='text' onChange={handleChange} value={item}/>
          <input type='submit'/>
        </form>
    <HandleTodo todos={todos} dispatch ={dispatch}/>
    </>
  )
}

export default App
