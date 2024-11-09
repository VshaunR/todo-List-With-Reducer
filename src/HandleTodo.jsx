import { useState,useReducer } from "react"




export default function HandleTodo({todos,dispatch}){



  const [edit,setEdit]= useState(null);
  const [editText,setEditText]= useState("")

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
        todos.map((todo)=>{
          if(todo.id ===id){
            dispatch({type:'delete',payload:{id:todo.id}})
          }
        })
          // const del = [...todos].filter((todo)=>todo.id !==id);
          // setTodos(del)
    }

    //setting the id of the item we want to edit when clicking the edit button
    function handleEdit(id){
      let edit = [...todos]

      edit.filter((todo)=>{
        if(todo.id ===id){
        setEdit(todo.id)
        }
      })
    }

    //setting the text of the input change to exitText
    function handleEditText(e){
      setEditText(e.target.value)
    }

    //saving the edited text to state
    function handleEditSubmit(id){
        let edit = [...todos].map((todo)=>{
          if(todo.id===id){
            todo.todo =editText
          }
          return todo;
        })
        //setting the new value
        setTodos(edit)
        //resetting the id to null
        setEdit(null)
    }
  return(<>
  
  {todos.map((todo)=>{
    return (
    <div key={todo.id}>
        {edit ===todo.id ? (<input type="text"  value={editText} onChange={handleEditText}/>):(  <p>{todo.todo}</p>)}
    
      
      <button onClick={()=>handleDelete(todo.id)}>Delete</button>
      <input type="checkbox" value={todo.completed} id="completed" onChange={()=>handleCheck(todo.id)}/>

      {edit == todo.id 
      ?(<button onClick={()=>{handleEditSubmit(todo.id)}}>Save</button>)
      :( <button onClick={()=>handleEdit(todo.id)}>Edit</button>)}
    
    
    
    </div>
    )
  })}



  </>)

}