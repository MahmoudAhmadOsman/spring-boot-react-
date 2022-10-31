import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import REGISTER_API from "../../utils/ApiRegisterConfig";

const Signup = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [pwd, setPwd] = useState("");
	const [mobileNumber, setMobileNumber] = useState("");

	const navigate = useNavigate();

	const updateName = (e: any) => {
		setName(e.target.value);
		// console.log(e.target.value);
	};

	const updateEmail = (e: any) => {
		setEmail(e.target.value);
	};

	const updatePassword = (e: any) => {
		setPwd(e.target.value);
	};

	const updateMobile = (e: any) => {
		setMobileNumber(e.target.value);
	};

	const submit = async (e: { preventDefault: () => void }) => {
		e.preventDefault();

		await REGISTER_API.post("/register", {
			name: name,
			email: email,
			pwd: pwd,
			mobileNumber: mobileNumber,
		})
			.then(() => {
				toast.success("Registered successfully!!!");
				navigate("/register");
			})
			.catch((error) => {
				toast.error("Error: unable to create new account!!");
			});

		setName("");
		setEmail("");
		setPwd("");
		setMobileNumber("");
	};
	return (
		<section className="register">
			<div className="container">
				<div className="row mt-3">
					<div className="col-lg-6 col-md-6 col-xs-12 m-auto shadow shadow-lg mb-5 bg-body p-4 rounded">
						<h2 className="text-success">Create An Account</h2> <hr />
						<small>Please provide basic information about your account.</small>
						<form autoComplete="off" onSubmit={submit}>
							<div className="mb-3 mt-3">
								<label htmlFor="username">Full Name</label>
								<input
									type="text"
									className="form-control form-control-lg"
									placeholder="Enter your full name"
									name="name"
									required
									id="name"
									value={name}
									onChange={updateName}
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
									onChange={updateEmail}
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
									onChange={updatePassword}
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
									onChange={updateMobile}
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
