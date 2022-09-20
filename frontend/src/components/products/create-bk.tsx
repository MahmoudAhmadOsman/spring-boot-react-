import React, { useState } from "react";
import ProductService from "../../services/ProductService";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
	const navigate = useNavigate();
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [description, setDescription] = useState("");

	//const blog = { name, price, description };
	// const [product, setProduct] = useState({
	// 	id: "",
	// 	name: "",
	// 	price: "",
	// 	description: "",
	// });

	// const handleChange = (e: any) => {
	// 	const value = e.target.value;
	// 	setProduct({ ...product, [e.target.name]: value });
	// };

	// const saveProduct = (e: any) => {
	// 	e.preventDefault();
	// 	console.log(e.target.value);
	// 	// ProductService.saveEmployee(product)
	// 	// 		.then((response) => {
	// 	// 			console.log(response);
	// 	// 			navigate("/employeeList");
	// 	// 		})
	// 	// 		.catch((error) => {
	// 	// 			console.log(error);
	// 	// 		});
	// };

	const handleSubmit = (e: any) => {
		e.preventDefault();
		//alert("Form Submitted!");
		//Now, create blog object
		const product = { name, price, description };
		//console.log(product);

		//Now, make the POST request here to the same api endpoint
		fetch("http://localhost:8080/api/v1/products/", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(product),
		}).then(() => {
			setTimeout(function () {
				navigate("/");
			}, 2000);
		});
	};

	return (
		<section className="product">
			<div className="container">
				<h1 className="text-success">Add New Products</h1> <hr />
				{/*  onSubmit={saveProduct} */}
				<form action="" className="fw-bold" onSubmit={handleSubmit}>
					<div className="row">
						<div className="col-md-10">
							<label htmlFor="productName" className="form-label">
								Product Name
							</label>
							<input
								className="form-control form-control-lg"
								type="text"
								placeholder="Product name"
								aria-label="form-control-lg"
								name="name"
								value={name}
								onChange={(e) => setName(e.target.value)}
								// value={product.name}
								// onChange={(e) => handleChange(e)}
							/>
						</div>
						{/* Product price */}
						<div className="col-md-2">
							<label htmlFor="productPrice" className="form-label">
								Product Price
							</label>
							<input
								className="form-control form-control-lg"
								type="number"
								minLength={0}
								maxLength={20}
								placeholder="Product Price"
								aria-label="form-control-lg"
								name="price"
								value={price}
								onChange={(e) => setPrice(e.target.value)}
								// value={product.price}
								// onChange={(e) => handleChange(e)}
							/>
						</div>

						{/* Product description */}
					</div>
					<div className="row">
						<div className="col-md-12 mt-3">
							<label htmlFor="productDescription" className="form-label">
								Product Description
							</label>
							<textarea
								className="form-control form-control-lg"
								cols={30}
								rows={10}
								placeholder="Product description"
								aria-label="form-control-lg"
								name="description"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
								// value={product.description}
								// onChange={(e) => handleChange(e)}
							></textarea>
						</div>
					</div>
					<div className="row">
						<div className="col-12 mt-2">
							<button className="btn btn-success btn-lg fw-bold" type="submit">
								SUBMIT
							</button>
						</div>
					</div>
				</form>
			</div>
		</section>
	);
};

export default CreateProduct;
