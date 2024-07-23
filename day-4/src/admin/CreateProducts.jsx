import { useEffect, useState } from "react";
import axios from "axios";

function CreateProducts(){
    const [allProducts, setAllProducts]=useState([]);
    console.log(allProducts, "allProducts ");
 async   function GetProducts(){
        // alert("hii from get products");
        try{
       const response= await axios.get('/product/get-all-product');
       console.log(response.data);
       setAllProducts(response.data.productData);

        }catch(error){
            console.log(error);
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
                <div style={{width:"23%", height:"700px" ,
                     border:"2px solid black" , marginBottom:"15px", borderRadius:"20px"
            }}>
                    <img  style={{width:"90%", height:"50%"}}  src ={product.image}/>
                <p>name:{product.name}</p>
                <p> price:{product.price}</p>
                <p>category:{product.category}</p>
                <p>quantity:{product.quantity}</p>
                <button>Add to card</button>
                </div>
            ))}
        </div>
        </div>
    );
}
export default CreateProducts;