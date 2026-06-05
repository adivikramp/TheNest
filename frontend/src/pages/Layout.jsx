import { useState, useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const NavItem = ({ to, children, onClick }) => (
	<Link
		to={to}
		onClick={onClick}
		className="group relative uppercase font-black text-white md:text-gray-500 tracking-widest cursor-pointer hover:text-gray-300 md:hover:text-black transition-colors"
	>
		{children}
		<span className="absolute bottom-0 left-0 h-0.5 w-full bg-black scale-x-0 transition-transform origin-left group-hover:scale-x-100 hidden md:block" />
	</Link>
);

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
		{ to: "/", label: "HOME" },
		{ to: "/plantkingdom", label: "PRODUCTS" },
		{ to: "/login", label: "LOGIN" },
		{ to: "/register", label: "REGISTER" },
	];

	const authLinks = [
		{ to: "/", label: "HOME" },
		{ to: "/plantkingdom", label: "PRODUCTS" },
		{ to: "/order", label: "ORDER" },
		{ to: "/feedback", label: "FEEDBACK" },
		{ to: "/dashboard", label: "DASHBOARD" },
	];

	const links = user.email ? authLinks : guestLinks;

	return (
		<>
			{/* Mobile: absolute + transparent so hero shows through. Desktop: relative + white */}
			<nav className="h-1/5 w-full z-[999] flex items-center justify-between px-5 absolute bg-transparent md:relative md:bg-white md:flex-col md:justify-around md:px-[100px]">
				<Link
					to="/"
					onClick={close}
					className="flex items-center text-white md:text-black"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 24 24"
					>
						<path
							fill="currentColor"
							d="M12 2a10 10 0 0 1 10 10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2A10 10 0 0 1 12 2m0 6a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m5 4a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2M7 12a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m8 3l1.27 4.45l.08.55c0 1.1-.9 2-2 2h-4.7a2 2 0 0 1-2-2l.08-.55L9 15h6Z"
						/>
					</svg>
					<span
						className="mx-4 text-[2rem]"
						style={{ fontFamily: "'Exo 2', sans-serif" }}
					>
						The Nest
					</span>
				</Link>

				{/* Hamburger — mobile only */}
				<button
					type="button"
					onClick={() => setMenuOpen((o) => !o)}
					className="flex flex-col justify-center gap-[5px] cursor-pointer bg-transparent md:hidden"
					aria-label="Toggle menu"
				>
					<span
						className={`block w-[25px] h-[3px] bg-white transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
					/>
					<span
						className={`block w-[25px] h-[3px] bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
					/>
					<span
						className={`block w-[25px] h-[3px] bg-white transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
					/>
				</button>

				{/* Nav menu */}
				<ul
					className={`
						flex flex-col items-center justify-center gap-8
						fixed left-0 w-full h-full bg-black
						transition-all duration-300
						md:static md:flex-row md:gap-0 md:w-auto md:h-auto md:bg-transparent
						${menuOpen ? "top-0" : "top-[-100%] md:top-auto"}
					`}
				>
					{links.map(({ to, label }, i) => (
						<li
							key={to}
							className={`mx-4 ${i === 0 ? "mt-20 md:mt-0" : ""}`}
						>
							<NavItem to={to} onClick={close}>
								{label}
							</NavItem>
						</li>
					))}
					{user.email && (
						<li className="mx-4">
							<button
								type="button"
								onClick={handleLogout}
								className="uppercase font-black text-white md:text-gray-500 tracking-widest cursor-pointer hover:text-gray-300 md:hover:text-black transition-colors"
							>
								LOGOUT
							</button>
						</li>
					)}
				</ul>
			</nav>

			<Outlet />
		</>
	);
};

export default Layout;
