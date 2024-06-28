import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
// import { AuthContext } from "../context/auth.context";
import { login } from "./authSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  // const{ dispatch}=useContext(AuthContext);
  const dispatch =useDispatch();
  const router = useNavigate();
  const [userData, setUserData] = useState({
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
      if (userData.email && userData.password) {
        const response = {
          data: { success: true, 
            message: "Regsiter successfull.",
            userData:{name:"Awdiz"} },
        };

        if (response.data.success) {
          dispatch(login(response.data.userData));
          console.log(login(response.data.userData))
          setUserData({
            email: "",
            password: "",
          });
          router("/");
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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
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
        <input type="submit" value="Login" />
        <br />
      </form>
    </div>
  );
};

export default Login;