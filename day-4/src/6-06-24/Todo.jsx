import { useState } from "react";

// import { useState } from "react";

 function Todo(){
   const[Todo, setTodo]=useState("");
const[allTodos , setALLTodo]=useState([]);

   function HandlerChange(event){
    //    console.log(event.target.value);
       setTodo(event.target.value);
   }

   function HandlerSubmit(){
    setALLTodo([...allTodos,Todo]);
    setTodo("");
   }
   function deleteTodo(index) {
    const newArray = [...allTodos];
    newArray.splice(index, 1);
    setALLTodo(newArray);
  }

    return(
<div>
    <h1 >Todo</h1>
    <input   style={{width:"40%", height:"40px" }} value={Todo} onChange={HandlerChange}/>
    <br/>
    <br/>
    <button  style={{width:"10%", height:"40px" }} onClick={HandlerSubmit}>Submit </button>
    <h1 style={{color:"purple"}}>All Todos.</h1>
    {allTodos.map((Todo ,i)=>(
        <div key={i} style={{
            display:"flex", 
            justifyContent:"space-around",
             width:"50%",
             margin:"auto"

             
             }}>
<h3 style={{color:"green"}} >
    {""}
    {i+1} . {Todo}</h3>
    <button  style={{width:"20%", height:"40px" }} onClick={() => deleteTodo(i)}>Delete.</button>
    
</div>
))}
</div>
    );
 }
  export default Todo;





// function Todo(){
//     const[Todo ,setTodo]=useState("");
//     const[AllTodos, setTodo]=useState([]);
//     function HandlerChange(event){
//         setTodo(event.target.value)

//     }
//     function HandlerSubmit(){
//         setALLTodo([...allTodos,Todo]);
//           setTodo("");
//     }
//     return(
//         <div> 
//             <h1>todo</h1>
//             <input name="mytodo" onClick={HandlerChange} />
//             <br/>
//             <div>(
//             {allTodo.map((Todo ,i)=>
//                 <h3 style={{color:"green"}} >
//                  {""}
//                  {i+1} . {Todo}</h3>
//             <button onClick={HandlerSubmit}>Submit</button>
            
            
//              ); </div>
//                   )}
                  
//         </div>
//     );
// }
// export default Todo;