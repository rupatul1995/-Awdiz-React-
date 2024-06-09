import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
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
          router("/login");
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