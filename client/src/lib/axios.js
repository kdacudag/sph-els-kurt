import Axios from "axios";

const axios = Axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default axios;
