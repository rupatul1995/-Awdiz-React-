import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Api from "../axiosConfig";



const AdminRegister = () => {
    const router = useNavigate();
  const [adminData, setAdminData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);
  const [disable, setDisable] = useState(true);
  console.log(errors, "errors");

  console.log(adminData, "userData");
  function handleChange(event) {
    setAdminData({ ...adminData, [event.target.name]: event.target.value });
   
  }

  async function handleSubmit(e) {
    e.preventDefault();
  
    try {
      if (adminData.name && adminData.email && adminData.password) {
          const response = await Api.post("/admin/admin-register" , {adminData});
    
        if (response.data.success) {
            setAdminData({
            name: "",
            email: "",
            password: "",
          });
          router("/adminlogin");
          toast.success(response.data.message);
        }
      } else {
        throw Error("All fields are mandatory.");
      }
    } catch (error) {
      console.log(error, "error");
      toast.error(error.response.data.error);
    }
  }

  useEffect(() => {
    const errorsArray = [];
    if (!adminData.name) {
      errorsArray.push("Name is required.");
    }
    if (!adminData.email) {
      errorsArray.push("Email is required.");
    }
    if (!adminData.password) {
      errorsArray.push("Password is required.");
    }
    setErrors(errorsArray);
    if (errorsArray.length ===0) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [adminData]);

        return (
          <div>
            <form onSubmit={handleSubmit}>
              <h1> AdminRegister</h1>
              <label>Name : </label>
              <br />
              <input
                type="text"
                onChange={handleChange}
                name="name"
                value={adminData.name}
              />
              <br />
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
              {errors.length > 0 && (
                <div>
                  {errors.map((error, i) => (
                    <p key={i}>{error}*</p>
                  ))}
                </div>
              )}
              <input disabled={disable} type="submit" value="Register" />
              <br />
            </form>
          </div>
    );
}
export default AdminRegister;