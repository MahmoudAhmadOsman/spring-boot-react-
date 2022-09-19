import React from "react";

const Product = () => {
	return (
		<section className="product">
			<div className="container">
				<h1 className="text-success">Add New Products</h1> <hr />
				<form action="" className="fw-bold">
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
								name="description"
								cols={30}
								rows={10}
								placeholder="Product description"
								aria-label="form-control-lg"
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

export default Product;
