import { NavLink } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="bg-green-900 text-green-100 mt-auto">
			<div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
				{/* Brand */}
				<div className="flex flex-col gap-4">
					<div className="flex items-center gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="28"
							height="28"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="text-green-400"
						>
							<path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-8 8" />
						</svg>
						<span className="font-brand text-xl font-bold text-white">
							The Nest
						</span>
					</div>
					<p className="text-sm text-green-300 leading-relaxed max-w-xs">
						Your one-stop destination for plants, tools, and everything you need
						to grow a beautiful garden.
					</p>
				</div>

				{/* Navigation */}
				<div className="flex flex-col gap-3">
					<h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-1">
						Navigation
					</h3>
					{[
						{ to: "/", label: "Home" },
						{ to: "/plantkingdom", label: "Shop" },
						{ to: "/order", label: "Order" },
						{ to: "/feedback", label: "Feedback" },
					].map(({ to, label }) => (
						<NavLink
							key={to}
							to={to}
							end={to === "/"}
							className="text-sm text-green-300 hover:text-white transition-colors"
						>
							{label}
						</NavLink>
					))}
				</div>

				{/* Contact */}
				<div className="flex flex-col gap-3">
					<h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-1">
						Get in Touch
					</h3>
					<p className="text-sm text-green-300">Mumbai · Delhi · Agra</p>
					<p className="text-sm text-green-300">hello@thenest.in</p>
					<p className="text-sm text-green-300">+91 98765 43210</p>
				</div>
			</div>

			<div className="border-t border-green-800">
				<div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
					<p className="text-xs text-green-500">
						&copy; {new Date().getFullYear()} The Nest. All rights reserved.
					</p>
					<p className="text-xs text-green-600">
						Crafted with 🌿 for plant lovers
					</p>
				</div>
			</div>
		</footer>
	);
};

export { Footer };
