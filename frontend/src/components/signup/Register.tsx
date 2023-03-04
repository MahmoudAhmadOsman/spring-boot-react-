import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import RegisterService from "../../services/RegisterService";

const Signup = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [pwd, setPwd] = useState("");
	const [mobileNumber, setMobileNumber] = useState("");
	const [role, setRole] = useState("");

	const navigate = useNavigate();

	const customerData = { name, email, pwd, mobileNumber, role };

	const saveCustomer = async (e: { preventDefault: () => void }) => {
		e.preventDefault();

		await RegisterService.saveCustomer(customerData)
			.then(() => {
				toast.success("Registered successfully!!!");
				navigate("/");
			})
			.catch((error) => {
				toast.error("Error: unable to create new account!!");
			});

		console.log(customerData);

		setName("");
		setEmail("");
		setPwd("");
		setMobileNumber("");
		setRole("");
	};
	return (
		<section className="register">
			<div className="container">
				<div className="row mt-3">
					<div className="col-lg-6 col-md-6 col-xs-12 m-auto shadow shadow-lg mb-5 bg-body p-4 rounded">
						<h2 className="text-success">Create An Account</h2> <hr />
						<small>Please provide basic information about your account.</small>
						<form autoComplete="off">
							<div className="mb-3 mt-3">
								<label htmlFor="username">Full Name</label>
								<input
									type="text"
									className="form-control form-control-lg"
									placeholder="Enter your full name"
									name="name"
									id="name"
									value={name}
									onChange={(e) => setName(e.target.value)}
									required
								/>
							</div>
							{/* Email */}
							<div className="mb-3 mt-3">
								<label htmlFor="email">Email</label>
								<input
									type="text"
									className="form-control form-control-lg"
									placeholder="Enter your email address"
									required
									name="email"
									id="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							{/* Password */}
							<div className="mb-3 mt-3">
								<label htmlFor="pwd">Password</label>
								<input
									type="password"
									className="form-control form-control-lg"
									placeholder="Enter your password"
									name="pwd"
									required
									id="pwd"
									value={pwd}
									onChange={(e) => setPwd(e.target.value)}
								/>
							</div>

							{/* Mpbile */}
							<div className="mb-3 mt-3">
								<label htmlFor="mobileNumber">Mobile</label>
								<input
									type="text"
									className="form-control form-control-lg"
									placeholder="Enter your mobile number"
									required
									name="mobileNumber"
									id="mobileNumber"
									value={mobileNumber}
									onChange={(e) => setMobileNumber(e.target.value)}
								/>
							</div>

							<div className="mb-3">
								<label htmlFor="role">User Role</label>
								<select
									name="gender"
									value={role}
									onChange={(e) => setRole(e.target.value)}
									className="form-select form-select-lg"
								>
									<option value="" disabled>
										Select one
									</option>
									<option value="USER" selected>
										User
									</option>
									<option value="OTHER">Other</option>
								</select>
							</div>

							<button
								onClick={(e) => saveCustomer(e)}
								type="submit"
								className="btn btn-success fw-bold btn-lg"
							>
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
