import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";

import Signup from "./components/signup/Signup";
import CreateProduct from "./components/products/CreateProduct";
import Home from "./components/home/Home";
import ProductList from "./components/products/ProductList";

function App() {
	return (
		<div className="app-container">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/products" element={<ProductList />}></Route>
					<Route path="/products/create" element={<CreateProduct />}></Route>
					<Route path="/signup" element={<Signup />}></Route>
				</Routes>

				<ToastContainer />
			</BrowserRouter>
		</div>
	);
}

export default App;
