import { useContext, useEffect, useState } from "react";
import Api from "../axiosConfig";
import { AuthContext } from "../context/auth.context";

function YourAddedProducts() {
  const [allProducts, setAllProducts] = useState([]);
  console.log(allProducts, "allProducts");
  const [loading, setLoading] = useState(false);
  const { state } = useContext(AuthContext);

  async function GetProducts() {
    setLoading(true);
    try {
      const response = await Api.post("/admin/your-added-products", {
        userId: state?.user?.userId,
      }); 
      if (response.data.success) {
        
        setLoading(false);
        setAllProducts(response.data.products);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (state) {
      GetProducts();
    }
  }, [state]);

  return (
    <div>
      <h1>All Products</h1>
      {loading ? (
        <div>
          <h1>Loading...</h1>
         tifyContent: "space-around",
            

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
              }}
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

export default YourAddedProducts;