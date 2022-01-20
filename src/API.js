import axios from "axios";

const baseURL = "https://fakestoreapi.com/";
const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default class API {
  getProducts = async (params) => {
    return api.get("/products/", { params });
  };
}
