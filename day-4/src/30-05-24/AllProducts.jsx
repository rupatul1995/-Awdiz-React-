import { useEffect, useState } from "react";
import Api from "../axiosConfig";
import { useNavigate } from "react-router-dom";

function AllProducts() {
  const [allProducts, setAllProducts] = useState([]);
  console.log(allProducts, "allProducts");
  
  const [loading, setLoading] = useState(false);
  const router=useNavigate();

  async function GetProducts() {
    setLoading(true);
    try {
      const response = await Api.get("/product/get-all-product"); 
      if (response.data.success) {
        setLoading(false);
        setAllProducts(response.data.products); 
      }
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
      {loading ? (
        <div>
          <h1>Loading...</h1>
         
        </div>
      ) : (
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
                cursor: "pointer",
              }}
              onClick={() => router(`/product/${product._id}`)}
            >
              <img
                style={{ width: "80%", height: "70%" }}
                src={product.image}
              />
              <p>Title : {product.name}</p>
              <p>Price : {product.price}/-</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AllProducts;







