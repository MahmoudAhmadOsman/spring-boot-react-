import React from "react";
import "./Home.css";

const Home = () => {
	return (
		<div className="home_page">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-12 col-md-12">
						<div
							id="carouselExampleIndicators"
							className="carousel slide"
							data-bs-ride="carousel"
						>
							<div className="carousel-indicators">
								<button
									type="button"
									data-bs-target="#carouselExampleIndicators"
									data-bs-slide-to={0}
									className="active"
									aria-current="true"
									aria-label="Slide 1"
								/>
								<button
									type="button"
									data-bs-target="#carouselExampleIndicators"
									data-bs-slide-to={1}
									aria-label="Slide 2"
								/>
								<button
									type="button"
									data-bs-target="#carouselExampleIndicators"
									data-bs-slide-to={2}
									aria-label="Slide 3"
								/>
							</div>
							<div className="carousel-inner">
								<div className="carousel-item active">
									<img
										src="https://source.unsplash.com/1000x300/?iPhone12"
										className="d-block w-100"
										alt="iPhone 12"
									/>
								</div>
								<div className="carousel-item">
									<img
										src="https://source.unsplash.com/1000x300/?iPhone13"
										className="d-block w-100"
										alt="iPhone 13"
									/>
								</div>
								<div className="carousel-item">
									<img
										src="https://source.unsplash.com/1000x300/?iPhone14"
										className="d-block w-100"
										alt="iPhone 14"
									/>
								</div>
							</div>
							<button
								className="carousel-control-prev"
								type="button"
								data-bs-target="#carouselExampleIndicators"
								data-bs-slide="prev"
							>
								<span
									className="carousel-control-prev-icon"
									aria-hidden="true"
								/>
								<span className="visually-hidden">Previous</span>
							</button>
							<button
								className="carousel-control-next"
								type="button"
								data-bs-target="#carouselExampleIndicators"
								data-bs-slide="next"
							>
								<span
									className="carousel-control-next-icon"
									aria-hidden="true"
								/>
								<span className="visually-hidden">Next</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
