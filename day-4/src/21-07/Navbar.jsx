import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const Navbar = () => {
  const router = useNavigate();
  const { state } = useContext(AuthContext);
  
  return (
    <div
      style={{
        display: "flex",
        height: "60px",
        border: "2px solid black",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <h2 onClick={() => router("/")}>Home</h2>
      {state?.user?.role === "user" && (
        <h2 onClick={() => router("/all-product")}>All Product</h2>
      )}
      {state?.user?.role === "user" && (
        <h2 onClick={() => router("/cart")}>Cart</h2>
      )}
      {state?.user?.role === "admin" && (
        <h2 onClick={() => router("/add-product")}>Add Product</h2>
      )}
      {state?.user?.role === "admin" && (
        <h2 onClick={() => router("/your-added-products")}>Added Products</h2>
      )}
      {state?.user ? (
        <>
          <h2  >Logout</h2>
        </>
      ) : (
        <>
          <h2 onClick={() => router("/login")}>Login/Register</h2>
        </>
      )}
    </div>
  );
};

export default Navbar;




// import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/auth.context';
// import { useContext } from 'react';
// import Api from '../axiosConfig';




// function Navbar() {
//   const {state,dispatch} = useContext(AuthContext);
//   console.log(state,"stateinNavbar");
// const route=useNavigate();

// async function LogOut(){
//         try{
//            const response= await Api.get("/auth/user-logout");
//            if(response.data.success){
//             dispatch({type:"LOGOUT",payload:null})
//             toast.success(response.data.message)
//             route("/logindetail")
//            }else{
//             toast.error('Logout failed');
//            }
//         }catch(error){
//           toast.error(error?.response?.data?.error || 'An error occurred during logout');
//         }
//     }


    
// async function AdminLogout(){
//   try{
//      const response= await Api.get("/admin/admin-logout");
//      if(response.data.success){
//       dispatch({type:"LOGOUT",payload:null})
//       toast.success(response.data.message)
//       route("/adminLogin")
//      }else{
//       toast.error('Logout failed');
//      }
//   }catch(error){
//     toast.error(error?.response?.data?.error || 'An error occurred during logout');
//   }
// }

//   return (
//     <div style={{display:"flex", alignItems:"center", justifyContent:"space-around",border:"1px solid black"}}>
//       <h2>Logo</h2>
//       <h2>Home</h2>

//       {state?.user?.role == "admin" && (<h2 onClick={()=>route("/create-newproducts")}>Add Product</h2>)} 
//       {
//         state?.user?(
//           <><h2 onClick={LogOut} className='logout'>LogOut</h2></>
//         ):
//         (<><h2 onClick={()=>route("/register")}>Login/Register</h2></> )

        
//       }
      
      
//     </div>
//   )
// }

// export default Navbar;