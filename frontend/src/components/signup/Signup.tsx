import React from "react";

const Signup = () => {
	return (
		<section className="singup">
			<div className="container">
				<div className="row mt-3">
					<div className="col-lg-4 col-md-6 col-xs-12 m-auto shadow shadow-lg mb-5 bg-body p-4 rounded">
						<h4 className="text-success">Create An Account</h4> <hr />
						<small>Please provide basic information about your account.</small>
						<form autoComplete="off">
							<div className="mb-3 mt-3">
								<label htmlFor="username">Username</label>
								<input
									type="text"
									className="form-control form-control-lg"
									id="username"
									placeholder="Enter your username"
									name="username"
								/>
							</div>
							<div className="mb-3 mt-3">
								<label htmlFor="password">Password</label>
								<input
									type="text"
									className="form-control form-control-lg"
									id="password"
									placeholder="Enter your password"
									name="password"
								/>
							</div>
							<button type="submit" className="btn btn-success fw-bold btn-lg">
								SUBMIT
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Signup;
