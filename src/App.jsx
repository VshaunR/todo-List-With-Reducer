import { useState,useReducer } from 'react';
import HandleTodo from './HandleTodo';
import './App.css';
import initialState from './utilities/data.mjs';



function reducer(todos,action){

  switch(action.type){
    case'add':
    return  todos !==null? ([...todos,(add(action.payload.item))]):(<h1>Add</h1>)
    case 'check':
      return [...todos].map((todo)=>{

        if(todo.id ===action.payload.id){
          //had to i guess uplift state of the todo object 
          //so i made a new object of todo and set completed to !
          // im only uplifting ONE todos bool at a time
          return {...todo,completed:!todo.completed}
        }
        return todo
      });
    case 'delete':
      return  todos !==null? ( [...todos].filter((todo)=>todo.id !==action.payload.id)):(<h1>Nothing to delete</h1>)
      case 'edit':
        return  [...todos].map((todo)=>{
          if(todo.id===action.payload.id){
           return {...todo,todo:action.payload.editTodo}
          }
          return todo;
        })
        //setting the new value
   
        //resetting the id to null
      
        default:
          return todos

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
  const [todos,dispatch]= useReducer(reducer,initialState)

  function handleChange(e){

   setItem(e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault();
    //data validation
      const getItem = document.getElementById('item').value
      if(getItem ==""){
        return
      }
    dispatch({type:'add',payload:{item:item}})
    setItem("")
  }

 
  return (
    <>
      <h1 className='heading'>ToDo List</h1>
        <form className='add-form' onSubmit={handleSubmit}>
          <input type='text' onChange={handleChange} id='item' value={item} placeholder='Add Something To Do'/>
          <input type='submit'/>
        </form>
    <HandleTodo todos={todos} dispatch ={dispatch}/>
    </>
  )
}

export default App
