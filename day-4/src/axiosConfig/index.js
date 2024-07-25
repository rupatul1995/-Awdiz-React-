import axios from "axios";

const Api = axios.create({
  baseURL: "https://awdiz-backend-kkzj.onrender.com",
  withCredentials: true,
});

export default Api;