import { useState } from "react"

export default function HandleTodo({todos,setTodos}){

  const [check,setCheck]= useState(false)
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


  let list = todos.map((todo)=>{
    return (
    <div>
      <p>{todo.todo}</p>
      <input type="checkbox" value={todo.completed} id="completed" onChange={()=>handleCheck(todo.id)}/>
      <button>Edit</button>
      <button>Delete</button>
    </div>
    )
  })

  return(<>
  
    <div> {list}</div>



  </>)

}