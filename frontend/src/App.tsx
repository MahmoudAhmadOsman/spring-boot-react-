import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./home/Home";
import Product from "./components/products/Product";
import Signup from "./components/signup/Signup";

function App() {
	return (
		<div className="app-container">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/products" element={<Product />}></Route>
					<Route path="/signup" element={<Signup />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
