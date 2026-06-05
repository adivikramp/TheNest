import { useState, useContext } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const Layout = () => {
	const { user, setUser } = useContext(UserContext);
	const navigate = useNavigate();
	const [menuOpen, setMenuOpen] = useState(false);
	const close = () => setMenuOpen(false);

	const handleLogout = () => {
		if (confirm("Confirm Logout")) {
			setUser({ email: null, orders: [], feedbacks: [] });
			localStorage.removeItem("token");
			localStorage.removeItem("email");
			navigate("/");
			close();
		}
	};

	const guestLinks = [
		{ to: "/", label: "Home" },
		{ to: "/plantkingdom", label: "Shop" },
		{ to: "/login", label: "Login" },
	];

	const authLinks = [
		{ to: "/", label: "Home" },
		{ to: "/plantkingdom", label: "Shop" },
		{ to: "/order", label: "Order" },
		{ to: "/feedback", label: "Feedback" },
		{ to: "/dashboard", label: "Dashboard" },
	];

	const links = user.email ? authLinks : guestLinks;

	const linkClass = ({ isActive }) =>
		`text-sm font-medium tracking-wide transition-colors ${
			isActive
				? "text-green-700"
				: "text-stone-600 hover:text-green-700"
		}`;

	return (
		<>
			<nav className="sticky top-0 z-50 w-full bg-white border-b border-stone-200 shadow-sm">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
					{/* Brand */}
					<Link
						to="/"
						onClick={close}
						className="flex items-center gap-2 text-green-800"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="28"
							height="28"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-8 8" />
						</svg>
						<span className="font-brand text-xl font-bold text-green-800">
							The Nest
						</span>
					</Link>

					{/* Desktop links */}
					<ul className="hidden md:flex items-center gap-8">
						{links.map(({ to, label }) => (
							<li key={to}>
								<NavLink to={to} end={to === "/"} className={linkClass}>
									{label}
								</NavLink>
							</li>
						))}
					</ul>

					{/* Desktop right actions */}
					<div className="hidden md:flex items-center gap-3">
						{user.email ? (
							<button
								type="button"
								onClick={handleLogout}
								className="text-sm font-medium text-stone-600 hover:text-green-700 transition-colors"
							>
								Logout
							</button>
						) : (
							<Link
								to="/register"
								className="bg-green-700 hover:bg-green-800 text-white text-sm font-medium px-5 py-2 rounded-full transition-colors"
							>
								Register
							</Link>
						)}
						<Link
							to="/plantkingdom"
							className="bg-green-700 hover:bg-green-800 text-white text-sm font-medium px-5 py-2 rounded-full transition-colors"
						>
							Shop Now
						</Link>
					</div>

					{/* Hamburger */}
					<button
						type="button"
						onClick={() => setMenuOpen((o) => !o)}
						className="md:hidden flex flex-col justify-center gap-1.25 p-1"
						aria-label="Toggle menu"
					>
						<span
							className={`block w-6 h-0.5 bg-stone-700 transition-all duration-300 ${menuOpen ? "translate-y-1.75 rotate-45" : ""}`}
						/>
						<span
							className={`block w-6 h-0.5 bg-stone-700 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
						/>
						<span
							className={`block w-6 h-0.5 bg-stone-700 transition-all duration-300 ${menuOpen ? "-translate-y-1.75 -rotate-45" : ""}`}
						/>
					</button>
				</div>

				{/* Mobile drawer */}
				<div
					className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96 border-t border-stone-100" : "max-h-0"}`}
				>
					<ul className="px-6 py-4 flex flex-col gap-4 bg-white">
						{links.map(({ to, label }) => (
							<li key={to}>
								<NavLink
									to={to}
									end={to === "/"}
									onClick={close}
									className={linkClass}
								>
									{label}
								</NavLink>
							</li>
						))}
						{user.email ? (
							<li>
								<button
									type="button"
									onClick={handleLogout}
									className="text-sm font-medium text-stone-600 hover:text-green-700 transition-colors"
								>
									Logout
								</button>
							</li>
						) : (
							<li>
								<Link
									to="/register"
									onClick={close}
									className="inline-block bg-green-700 text-white text-sm font-medium px-5 py-2 rounded-full"
								>
									Register
								</Link>
							</li>
						)}
					</ul>
				</div>
			</nav>

			<Outlet />
		</>
	);
};

export default Layout;
