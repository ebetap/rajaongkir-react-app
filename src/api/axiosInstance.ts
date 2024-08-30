import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_RAJAONGKIR_API_URL,
  headers: {
    "Content-Type": "application/json",
    key: process.env.REACT_APP_RAJAONGKIR_API_KEY,
  },
});

export default axiosInstance;
