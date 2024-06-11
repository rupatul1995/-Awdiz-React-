import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Registervalidation = () => {
  const router = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
const[errors , setErrors]=useState([]);
const[disable , setDisable]=useState(true);
  console.log(userData, "userData");
  function handleChange(event) {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // api call to backend
    try {
      if (userData.name && userData.email && userData.password) {
        const response = {
          data: { success: true, message: "Regsiter successfull." },
        };
        if (response.data.success) {
          setUserData({
            name: "",
            email: "",
            password: "",
          });
          router("/Loginvalidation");
          toast.success(response.data.message);
        }
      } else {
        toast.error("All fields are mandatory.");
      }
    } catch (error) {
      console.log(error, "error");
      toast.error(error.response.data.message);
    }
  }
  useEffect(()=>{
    const errorArray=[];
    if(!userData.name){
        errorArray.push("Name is required");
    }
    if(!userData.email){
        errorArray.push("email is required");
    }
    if(!userData.password){
        errorArray.push("password is required");
    }
    setErrors(errorArray);
    // console.log(errors.length,"error.length");
    if( errors.length===0){
        setDisable(false);
    }else{
        setDisable(true);
    }
  },[userData]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>RegisterValidation</h1>
        <label>Name : </label>
        <br />
        <input
          type="text"
          onChange={handleChange}
          name="name"
          value={userData.name}
        />
        <br />
        <label>Email : </label>
        <br />
        <input
          type="email"
          onChange={handleChange}
          name="email"
          value={userData.email}
        />
        <br />
        <label>Password : </label>
        <br />
        <input
          type="password"
          onChange={handleChange}
          name="password"
          value={userData.password}
        />
        <br />
        
        <br />
        {errors.map((error,i)=>(
                <p key={i}>{error}*</p>
            ))}
            <input type='submit' value="Register" disabled={disable} />
      </form>
    </div>
  );
};

export default Registervalidation;