import Axios from "axios";

const axios = Axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Bearer-Token": localStorage.getItem("token"),
  },
});

axios.defaults.withCredentials = true;

export default axios;
