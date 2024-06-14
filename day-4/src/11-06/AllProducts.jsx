import { useEffect, useState } from "react";
import axios from "axios";

function AllProducts(){
    const [allProducts, setAllProducts]=useState([]);
    console.log(allProducts, "allProducts ")
 async   function GetProducts(){
        // alert("hii from get products");
        // const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://yahoo-weather5.p.rapidapi.com/weather',
    params: {
    location: 'sunnyvale',
    format: 'json',
    u: 'f'
  },
  headers: {
    'x-rapidapi-key': 'Sign Up for Key',
    'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
    setAllProducts([setProducts.data]);
} catch (error) {
	console.error(error);
}
    }

    useEffect(()=>{
        GetProducts();
    },[]);
    // useEffect(()=>{
    //      alert("hii")
    // },[])   //API CALL TO BACKEND
    
    return(
        <div><h1>All Products</h1>
       

        <div  style={{
            display:"flex",
            flexWrap:"wrap",
            justifyContent:"space-around",
            
            }}>


     {allProducts.map((product)=>(
         <div style={{width:"23%", height:"700px" , border:"2px solid black" , marginBottom:"15px", borderRadius:"20px"
            }}>
                    <img  style={{width:"90%", height:"50%"}}  src ={product.image}/>
                <p>title:{product.title}</p>
                <p>description:{product.description}</p>
                <p> price:{product.price}</p>
                <button>Add to card</button>
                </div>
            ))}
        </div>
        </div>
    );
}
export default AllProducts;