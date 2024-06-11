import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Loginvalidation = () => {
  const router = useNavigate();
  const [userData, setUserData] = useState({
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
      if ( userData.email && userData.password) {
        const response = {
          data: { success: true, message: "Regsiter successfull." },
        };
        if (response.data.success) {
          setUserData({
            email: "",
            password: "",
          });
          router("/successlogin");
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
        <h1>LoginValidation</h1>
       
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

export default Loginvalidation;