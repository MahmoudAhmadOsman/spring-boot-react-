import React, { useState } from "react";
import ProductService from "../../services/ProductService";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
	// const blog = { name, price, description };
	const [product, setProduct] = useState({
		id: "",
		name: "",
		price: "",
		description: "",
	});

	const navigate = useNavigate();

	const handleChange = (e: any) => {
		const value = e.target.value;
		setProduct({ ...product, [e.target.name]: value });
	};

	const saveProduct = async (e: any) => {
		e.preventDefault();
		// console.log("Form submitted!!");

		ProductService.saveProduct(product)
			.then((res) => {
				console.log(res);
				console.log(e.target.value);
				navigate("/");
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<section className="product">
			<div className="container">
				<h1 className="text-success">Add New Products</h1> <hr />
				{/* */}
				<form action="" className="fw-bold" onSubmit={saveProduct}>
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
								id="username"
								value={product.name}
								onChange={(e) => handleChange(e)}
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
								value={product.price}
								onChange={(e) => handleChange(e)}
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
								value={product.description}
								onChange={(e) => handleChange(e)}
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
