import React from "react";
import { Link } from "react-router-dom";

const ProductDetails = (props: any) => {
	const { products } = props;
	console.log(products);
	return (
		<>
			<section className="product-details mt-3 mb-3">
				<div className="container">
					<div className="row">
						<div className="col-lg-1">
							<Link to="/products">
								<i
									className="fa fa-chevron-left h2"
									aria-hidden="true"
									title="Back"
								></i>
							</Link>
						</div>
						<div className="col-lg-10 col-xs-12">
							<h2 className="text-success">Product Details</h2>
						</div>
						<hr />
					</div>
				</div>
				<div className="container mt-3">
					<div className="row">
						<div className="col-lg-6 col-md-6 col-xs-12">
							<img
								src="https://source.unsplash.com/1600x900/?iphone"
								className="img-fluid"
								alt="Prouct image"
							/>
						</div>
						<div className="col-lg-6 col-md-6 col-xs-12">
							<h1>
								<b>Price: $577.99 </b>
								<span className="text-daner"></span>
							</h1>

							<div className="product-desc">
								<h3 className="text-muted">Description</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Fugiat, dolore odio nihil ex quaerat accusantium doloribus
									excepturi quibusdam soluta et eaque, rem incidunt eos! Rem
									laboriosam ullam velit debitis omnis.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ProductDetails;
