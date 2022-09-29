import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PRODUCT_API from "../../utils/ApiConfigs";

const ProductList = (props: any) => {
	const navigate = useNavigate();
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const response = await PRODUCT_API.get("/products/list");
				setProducts(response.data);
			} catch (error) {
				toast.error("Error: unable to load  data!!");
			}
		};
		fetchProduct();
	}, []);

	//Delete Product
	const handleDelete = (id: any) => {
		alert("Are you sure, you want to delete this product?");
		PRODUCT_API.delete("/products/delete/" + id)
			.then(() => {
				toast.warning("Procuct deleted successfully!!!");
				navigate("/products/create");
			})
			.catch((error) => {
				toast.error("Error: unable to delete product!!");
			});
	};

	return (
		<section className="product-list">
			<div className="container">
				<div className="row">
					<p className="text-center">
						<small>New</small>
						<br /> <b className="fs-1">iPhone Series</b> <br />
						<b className="fw-bold fs-6 mb-3">Pro. Beyond.</b>
					</p>
					{products.map((product) => (
						<div className="col-lg-3 col-md-6 col-xs-12 " key={product["id"]}>
							<div
								className="card mb-4 shadow shadow-lg rounded "
								style={{ minHeight: "30rem" }}
							>
								{/* to={"/product/" + product["id"]} */}
								<Link to={`/product/${product["id"]}`}>
									<img
										src="https://source.unsplash.com/1600x900/?iphone"
										className="card-img-top"
										alt={product["name"]}
									/>
								</Link>
								<div className="card-body">
									<h3 className="card-title fw-bold text-secondary">
										{product["name"]}
									</h3>
									<p className="btn btn-outline-dark  fw-bold rounded-pill">
										<b>${product["price"]}</b>
									</p>
									<p className="card-text text-muted">
										{product["description"]}
									</p>

									<Link
										to={"/product/" + product["id"]}
										className="btn btn-outline-success"
									>
										View Details
									</Link>
									<Link
										to={"/product/" + product["id"]}
										className="btn btn-outline-info ms-2"
									>
										Edit
									</Link>

									<button
										onClick={() => handleDelete(product["id"])}
										// deleteEmployee={deleteEmployee}
										className="btn btn-outline-danger ms-2"
										title="Delete"
									>
										Delete
									</button>
									{/* <Link
										to={"/product/" + product["id"]}
										className="btn btn-outline-danger ms-2"
									>
										Delete
									</Link> */}
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
