import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Api from "../axiosConfig/index";


function Register() {
  const router = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  console.log(userData, "userData");
  function handleChange(event) {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (userData.name && userData.email && userData.password) {
        const response = await Api.post("/auth/register" , {userData});

        // const response = {
        //   data: { success: true, message: "Regsiter successfull." },
        // };
        if (response.data.success) {
          setUserData({
            name: "",
            email: "",
            password: "",
          });
          router("/login");
          toast.success(response.data.message);
        }
      } else {
        toast.error("All fields are mandatory.");
      }
    } catch (error) {
      console.log(error, "error");
      toast.error(error.response.data.error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
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
        <input type="submit" value="Register" />
        <br />
      </form>
    </div>
  );
};

export default Register;


// function Register(){
//   const router=useNavigate();
//   const[userData ,setUserData]=useState({
//     name:"",
//     email:"",
//     password:""

// });
// const [allUserData, setAlluserData]=useState({name:"",
//   email:"",
//   password:""
// });

// function Submitdata(){
//   setAlluserData([...allUserData,userData]);
//         setUserData("");
// }
//   function HandleChange(event){
//     setUserData({...userData ,[event.target.name]: event.target.value})
//   }

//   function handleSubmit(e){ 
//      e.preventDefault();
//      try {
//       if(userData.name && userData.email && userData.password){

//         const response={data :{ success:true ,  massage:"Register successful"}};

//         if(response.data.success){
//           setUserData({
//             name:"",  
//             email:"",
//             password:""
//           });
//           router("/login")
//           toast.success(response.data.massage);
//         }
        
//         } else{
//          toast.error("all inputs are mendatory.");
//         }
  
      
//      } catch (error) {
//       console.log(error,"error");
//       toast.error(error.response.data.message);
//      }
//   }
//   return(
// <div>
//   <h1>Register</h1>
//   <form onClick={handleSubmit}>
//     <label>Name:</label><br/>
//     <input name="name" value={userData.name} type="text" onChange={HandleChange}/><br/>
//     <label>Email:</label><br/>
//     <input  name="email"  type="email" value={userData.email} onChange={HandleChange}/><br/>
//     <label>Password:</label><br/>
//     <input name="password"  type="password" value={userData.password} onChange={HandleChange}/><br/>
//     <input name="Submit"  type="Submit"  /><br/>
//     <button onClick={Submitdata}>SAVE</button>
//   </form>
// </div>
//   );
// }

// export default Register;