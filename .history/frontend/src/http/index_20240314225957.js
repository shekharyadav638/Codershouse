import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

//List of all the endpoints
export const sendOtp = (data) => api.post("/api/sendOtp", data);

export default api;
