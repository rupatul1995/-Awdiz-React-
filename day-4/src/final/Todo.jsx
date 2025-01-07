function  Todo(){
    const[todo ,setTodo]=useState();
    const[alltodo, setAllTodo]=useState([]);
function handlechange(event){
    setTodo(event.target.value);
   
 }
 function handleSubmit(){
 setAllTodo([...alltodo ,todo]);
 setTodo("");
 }




return(
<div>
<h1> Todo List</h1>
<input onClick={handlechange} placeholder="enter your todo />
<button onClick={handleSubmit}>Submit</button>
</div>
);    
}
export defaul Todo;