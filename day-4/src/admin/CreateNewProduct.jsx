import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Api from "../axiosConfig";



function CreateNewProduct(){
    const router = useNavigate();
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    category: "",
    quantity:"",
  });
  const [errors, setErrors] = useState([]);
  const [disable, setDisable] = useState(true);
  console.log(errors, "errors");

  console.log(productData, "productData");
  function handleChange(event) {
    setProductData({ ...productData, [event.target.name]: event.target.value });
   
  }

  async function handleSubmit(e) {
    e.preventDefault();
  
    try {
      if (productData.name && productData.price && productData.category && productData.quantity) {
          const response = await Api.post("/product/create-new-product" , {productData});
    
        if (response.data.success) {
            setProductData({
            name: "",
            price: "",
            category: "",
            quantity:"",
          });
          router("/createproducts");
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
    if (!productData.name) {
      errorsArray.push("Name is required.");
    }
    if (!productData.price) {
      errorsArray.push("Price is required.");
    }
    if (!productData.category) {
      errorsArray.push("Category is required.");
    }
    if (!productData.quantity) {
      errorsArray.push("Quantity is required.");
    }
    setErrors(errorsArray);
    if (errorsArray.length ===0) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [productData]);

        return (
          <div>
            <form onSubmit={handleSubmit}>
              <h1> Add New Product</h1>
              <label>Name : </label>
              <br />
              <input
                type="text"
                onChange={handleChange}
                name="name"
                value={productData.name}
              />
              <br />
              <label>Price : </label>
              <br />
              <input
                type="number"
                onChange={handleChange}
                name="price"
                value={productData.price}
              />
              <br />
              <label>Category : </label>
              <br />
              <input
                type="text"
                onChange={handleChange}
                name="category"
                value={productData.category}
              />
              <br />
              <label>Quantity : </label>
              <br />
              <input
                type="number"
                onChange={handleChange}
                name="quantity"
                value={productData.quantity}
              />
              <br />
              <input disabled={disable} type="submit" value="Add Product" />
              <br />
            </form>
          </div>
    );
}
export default CreateNewProduct;