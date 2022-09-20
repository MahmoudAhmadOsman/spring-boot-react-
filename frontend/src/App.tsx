import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./home/Home";
import Signup from "./components/signup/Signup";
import CreateProduct from "./components/products/CreateProduct";

function App() {
	return (
		<div className="app-container">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/products" element={<CreateProduct />}></Route>
					<Route path="/signup" element={<Signup />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
