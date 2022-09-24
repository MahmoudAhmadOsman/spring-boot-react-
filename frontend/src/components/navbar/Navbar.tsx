import React from "react";
import "./Navbar.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<section className="main_navication">
			<header>
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<div className="container-fluid">
						<Link className="navbar-brand" to="/">
							<img src={logo} alt="logo" className="img-fluid image-logo" />
							<span className="px-2 fw-bold">Nothern Systems</span>
						</Link>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#main"
							aria-controls="main"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="main">
							<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
								<li className="nav-item">
									<Link className="nav-link active" aria-current="page" to="/">
										Home
									</Link>
								</li>

								<li className="nav-item dropdown">
									<Link
										className="nav-link dropdown-toggle"
										data-bs-toggle="dropdown"
										to="/products"
									>
										Products
									</Link>
									<ul className="dropdown-menu">
										<li className="nav-link active">
											<Link className="dropdown-item" to="/products">
												Products
											</Link>
										</li>
										<li className="nav-link active">
											<Link className="dropdown-item" to="/products/create">
												Add Product
											</Link>
										</li>
									</ul>
								</li>

								<li className="nav-item">
									<Link
										className="nav-link active"
										aria-current="page"
										to="/signup"
									>
										Register
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</header>
		</section>
	);
};

export default Navbar;
