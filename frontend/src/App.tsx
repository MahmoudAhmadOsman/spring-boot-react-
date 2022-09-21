import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";

import Signup from "./components/signup/Signup";
import CreateProduct from "./components/products/CreateProduct";
import Home from "./components/home/Home";

function App() {
	return (
		<div className="app-container">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/create" element={<CreateProduct />}></Route>
					<Route path="/signup" element={<Signup />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
