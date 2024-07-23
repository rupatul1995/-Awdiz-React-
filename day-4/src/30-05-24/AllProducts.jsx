import { useEffect, useState } from "react";
import Api from "../axiosConfig";


function AllProducts() {
  const [allProducts, setAllProducts] = useState([]);
  console.log(allProducts, "allProducts");

  async function GetProducts() {
    try {
      const response = await Api.get("/product/get-all-product");
      setAllProducts(response.data.product); 
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    GetProducts();
  }, []);

  return (
    <div>
      <h1>All Products</h1>
      
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {allProducts.map((product) => (
            <div
              style={{
                width: "23%",
                height: "350px",
                border: "2px solid black",
                marginBottom: "20px",
              }}
            >
              <img
                style={{ width: "80%", height: "50%" }}
                src={product.image}
              />
              <p>name: {product.name}</p>
              <p>Price : {product.price}</p>
              <p>category : {product.category}</p>
              <p>quantity : {product.quantity}</p>
            </div>
          ))}
        </div>
    </div>
  );
}

export default AllProducts;
