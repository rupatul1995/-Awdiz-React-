import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../axiosConfig";

const OrderPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useNavigate();

  async function fetchOrderDetails() {
    setLoading(true);
    try {
      const response = await Api.post("/user/get-order-details");
      if (response.data.success) {
        setOrders(response.data.orders);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchOrderDetails();
  }, []);

  return (
    <div>
      <h1>Order Details</h1>
      {loading ? (
        <div><h1>Loading...</h1></div>
      ) : (
        <div>
          {orders.length > 0 ? (
            orders.map((order) => (
              <div key={order._id} id="orderdetails">
                <h2>Order ID: {order._id}</h2>
                <h3>Total Amount: ₹{order.totalPaidAmount}</h3>
                <div id="orders">
                  {order.products.map((product) => (
                    <div key={product._id} id="orders1">
                        <img src={product.image}/>
                      <p><b>Title</b>: {product.name}</p>
                      <p><b>Price</b>: ₹{product.price}</p>
                      <p><b>Quantity</b>: {product.quantity}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p>No orders found.</p>
          )}
        </div>
      )}
      <button onClick={() => router('/cart')}>Back to Cart</button>
    </div>
  );
};

export default OrderPage;