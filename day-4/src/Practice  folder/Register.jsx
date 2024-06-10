import { useState } from "react";
import toast from "react-hot-toast";

function Register(){
    const[myData,setData]=useState({
        Name : "", 
        Email :"", 
        password :""});
 
function HandlerChange(event){
    setData({...myData,[event.target.name]:event.target.value})
}
function handlerSubmit(e){
     e.preventDefult();
     if(myData.name && myData.Email  && myData.password){
        const response={ data:{success:true , massage:"Register successfully."}}
        if()
     }
}
    return(
<div>
    <h1>Register</h1>
    <div>
        <form onSubmit={handlerSubmit}>
            <label>Name:</label><br/>
            <input type="text"  onChange={HandlerChange} name="Name"/><br/>
            <label>Email:</label><br/>
            <input type="Email"  onChange={HandlerChange} name="Email"/><br/>
            <label>Password:</label><br/>
            <input type="password"  onChange={HandlerChange} name="password"/><br/>
            <input type="submit" value="Register" />
        </form>
    </div>
</div>
    )
}
export default Register;