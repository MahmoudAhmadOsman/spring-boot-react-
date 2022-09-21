import axios from "axios";
import { useState } from "react";

const PRODUCT_API = axios.create({
	baseURL: "http://localhost:8080/api/v1",
});

 

export default PRODUCT_API;
