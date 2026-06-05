import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "../../components/Alert";
import { UserContext } from "../../contexts/UserContext";
import { registerUser } from "../../controllers/usersController";

const RegisterPage = () => {
	const { setUser } = useContext(UserContext);
	const navigate = useNavigate();
	const [error, setError] = useState(null);
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		confirmPassword: "",
	});

	function handleInput(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			await registerUser(formData.email, formData.password, formData.confirmPassword);
			setUser({ email: formData.email, orders: [], feedbacks: [] });
			navigate("/dashboard");
		} catch (err) {
			setError(err.message);
		}
	}

	return (
		<div className="min-h-screen flex">
			{/* Left panel */}
			<div className="hidden lg:flex lg:w-1/2 bg-green-800 flex-col justify-center items-center p-12 text-white">
				<div className="max-w-sm text-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="56"
						height="56"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="text-green-300 mx-auto mb-6"
					>
						<path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-8 8" />
					</svg>
					<h2 className="font-display text-4xl font-bold mb-4">
						Join The Nest
					</h2>
					<p className="text-green-200 leading-relaxed">
						Create your free account and start building your dream garden today.
						Access exclusive deals, track orders, and more.
					</p>
				</div>
			</div>

			{/* Right panel */}
			<div className="w-full lg:w-1/2 flex items-center justify-center bg-stone-50 p-8">
				<div className="w-full max-w-md">
					<div className="mb-8">
						<p className="text-green-700 text-sm font-semibold uppercase tracking-widest mb-2">
							The Nest
						</p>
						<h1 className="font-display text-3xl font-bold text-stone-800">
							Create Account
						</h1>
						<p className="text-stone-500 mt-2 text-sm">
							Already have an account?{" "}
							<Link
								to="/login"
								className="text-green-700 font-medium hover:underline"
							>
								Sign in
							</Link>
						</p>
					</div>

					<form onSubmit={handleSubmit} className="flex flex-col gap-5">
						<div className="flex flex-col gap-1.5">
							<label htmlFor="email" className="text-sm font-medium text-stone-700">
								Email Address
							</label>
							<input
								id="email"
								type="email"
								name="email"
								value={formData.email}
								onChange={handleInput}
								placeholder="you@example.com"
								autoFocus
								className="w-full border border-stone-300 rounded-xl px-4 py-3 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 transition"
							/>
						</div>

						<div className="flex flex-col gap-1.5">
							<label htmlFor="password" className="text-sm font-medium text-stone-700">
								Password
							</label>
							<input
								id="password"
								type="password"
								name="password"
								value={formData.password}
								onChange={handleInput}
								placeholder="••••••••"
								className="w-full border border-stone-300 rounded-xl px-4 py-3 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 transition"
							/>
						</div>

						<div className="flex flex-col gap-1.5">
							<label htmlFor="confirmPassword" className="text-sm font-medium text-stone-700">
								Confirm Password
							</label>
							<input
								id="confirmPassword"
								type="password"
								name="confirmPassword"
								value={formData.confirmPassword}
								onChange={handleInput}
								placeholder="••••••••"
								className="w-full border border-stone-300 rounded-xl px-4 py-3 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 transition"
							/>
						</div>

						{error && <Alert msg={error} />}

						<button
							type="submit"
							className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-full transition-colors mt-2"
						>
							Create Account
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default RegisterPage;
