import { useState } from "react";
import toast from "react-hot-toast";

function Register(){
    const[mydata,setData]=useState({
        Name : "", 
        Email :"", 
        password :""});
    function HandlerChange(event){
        setData({...setData,[event.target.name] :event.target.value});
        // setData({[event.target.name]:event.target.value})
    }
  
     async function handlerSubmit(e){
     e.preventDefult();
     try{
        if(mydata.Name && mydata.Email && mydata.password){
           const response ={data:{success:true, message:"Register successfull."}}
         if(response.data.success){
            setData({
                Name:"",
                email:"",
                password:"",
            });
          toast.success(response.data.massege);
        }
        }else{
            toast.error("all fields are mendotory");
        }

     }catch(error){
        toast.error(error.response.data.massage);

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