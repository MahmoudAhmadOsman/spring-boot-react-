import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetails = (product: any) => {
	const productDetails = "Product Details ";
	const { id } = useParams();

	return (
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
						<h2 className="text-success">
							{productDetails} | {id}
						</h2>
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

							{JSON.stringify(id)}
						</h1>

						<div className="product-desc">
							<h3 className="text-muted">name</h3>
							<p>description</p>

							{/* params */}

							{/* {
								product.filter(product => product.id === id).map(product:any)=>(
							
								)
							} */}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductDetails;
