import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PRODUCT_API from "../../utils/ApiConfigs";

const ProductList = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const response = await PRODUCT_API.get("/products/list");
				setProducts(response.data);
				console.log(response.data);
			} catch (error) {
				toast.error("Error: unable to load  products!!");
			}
		};
		fetchProduct();
	}, []);

	return (
		<section className="product-list">
			<div className="container">
				<h1 className="text-success">Product List</h1> <hr />
				<div className="row">
					{products.map((product) => (
						<div className="col-md-3" key={product["id"]}>
							<div className="card" style={{ minHeight: "30rem" }}>
								<img
									src="https://source.unsplash.com/1600x900/?iphone"
									className="card-img-top"
									alt={product["name"]}
								/>
								<div className="card-body">
									<h3 className="card-title fw-bold text-secondary">
										{product["name"]}
									</h3>
									<p className="card-text text-muted">
										{product["description"]}
									</p>
									<Link to="#" className="btn btn-outline-success">
										View Details
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProductList;
