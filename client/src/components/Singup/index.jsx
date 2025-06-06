import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Signup = () => {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:5000/api/users";
			const { data: res } = await axios.post(url, data);
			console.log(res.message);
			navigate("/login");
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className={styles.signup_container}>
			<form className={styles.form_container} onSubmit={handleSubmit}>
				<h1>Create Account</h1>
				<input
					type="text"
					placeholder="First Name"
					name="firstName"
					onChange={handleChange}
					value={data.firstName}
					required
					className={styles.input}
				/>
				<input
					type="text"
					placeholder="Last Name"
					name="lastName"
					onChange={handleChange}
					value={data.lastName}
					required
					className={styles.input}
				/>
				<input
					type="email"
					placeholder="Email"
					name="email"
					onChange={handleChange}
					value={data.email}
					required
					className={styles.input}
				/>
				<input
					type="password"
					placeholder="Password"
					name="password"
					onChange={handleChange}
					value={data.password}
					required
					className={styles.input}
				/>
				{error && <div className={styles.error_msg}>{error}</div>}
				<button type="submit" className={styles.green_btn}>
					Sign Up
				</button>
				<p>
					Already have an account?{" "}
					<Link to="/login" className={styles.link}>
						Sign In
					</Link>
				</p>
			</form>
		</div>
	);
};

export default Signup;
