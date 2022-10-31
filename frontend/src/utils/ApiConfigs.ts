import axios from "axios";

const PRODUCT_API = axios.create({
	baseURL: "http://localhost:8080/api/v1",
});

export default PRODUCT_API;
