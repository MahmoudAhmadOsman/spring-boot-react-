import axios from "axios";

const REGISTER_API = axios.create({
	baseURL: "http://localhost:8080/api/v2",
});

export default REGISTER_API;
