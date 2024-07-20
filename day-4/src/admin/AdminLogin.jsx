import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../context/auth.context";
import Api from "../axiosConfig";

const AdminLogin = () => {
  const { dispatch } = useContext(AuthContext);

  const router = useNavigate();
  const [adminData, setAdminData] = useState({
    email: "",
    password: "",
  });

  console.log(adminData, "adminData");
  function handleChange(event) {
    setAdminData({ ...adminData, [event.target.name]: event.target.value });
   
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (adminData.email && adminData.password) {
          const response = await Api.post("/admin/admin-login" , {adminData});
        if (response.data.success) {
          dispatch({ type: "LOGIN", payload: response.data.adminData });
          setAdminData({
            email: "",
            password: "",
          });
          router("/");
          toast.success(response.data.message);
        } else {
          toast.error(response?.data?.error)
        }
      } else {
        throw Error("All fields are mandatory.");
      }
    } catch (error) {
      console.log(error, "error");
      toast.error(error?.response?.data?.error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label>Email : </label>
        <br />
        <input
          type="email"
          onChange={handleChange}
          name="email"
          value={adminData.email}
        />
        <br />
        <label>Password : </label>
        <br />
        <input
          type="password"
          onChange={handleChange}
          name="password"
          value={adminData.password}
        />
        <br />
        <input type="submit" value="Login" />
        <br />
      </form>
    </div>
  );
};

export default AdminLogin;