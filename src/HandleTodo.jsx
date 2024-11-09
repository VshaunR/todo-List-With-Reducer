import { useState } from "react"

export default function HandleTodo({todos,setTodos}){

  
    function handleCheck(id){
      let getUpdate=[...todos]
        getUpdate.map((todo)=>{

          if(todo.id ===id){
            todo.completed = !todo.completed
          }else{
            todo.completed= todo.completed
          }
          return todo
        });

        setTodos(getUpdate)

    }

    function handleDelete(id){
     
          const del = [...todos].filter((todo)=>todo.id !==id);
          setTodos(del)
    }



  return(<>
  
  {todos.map((todo)=>{
    return (
    <div key={todo.id}>
      <p>{todo.todo}</p>
      <button onClick={()=>handleDelete(todo.id)}>Delete</button>
      <input type="checkbox" value={todo.completed} id="completed" onChange={()=>handleCheck(todo.id)}/>
      <button>Edit</button>
    
    </div>
    )
  })}



  </>)

}