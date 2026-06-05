import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "../../components/Alert";
import { FormContext } from "../../contexts/FormContext";
import { orderForm } from "../../controllers/formsController";

const states = [
	"Andhra Pradesh","Andaman and Nicobar Islands","Arunachal Pradesh","Assam","Bihar",
	"Chandigarh","Chhattisgarh","Dadar and Nagar Haveli","Daman and Diu","Delhi",
	"Lakshadweep","Puducherry","Goa","Gujarat","Haryana","Himachal Pradesh",
	"Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra",
	"Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim",
	"Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal",
];

const inputClass =
	"w-full border border-stone-300 rounded-xl px-4 py-3 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 transition bg-white";

const labelClass = "text-sm font-medium text-stone-700 mb-1.5 block";

const OrderPage = () => {
	const { orders, setOrders } = useContext(FormContext);
	const [error, setError] = useState(null);
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		name: "", email: "", state: "", city: "", order: "",
	});

	const handleInput = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const data = await orderForm(
				formData.name, formData.email, formData.state,
				formData.city, formData.order,
			);
			setOrders([...orders, data.placedOrder]);
			navigate("/dashboard");
		} catch (err) {
			setError(err.message);
		}
	};

	return (
		<div className="min-h-screen bg-stone-50">
			{/* Header */}
			<div className="bg-green-800 px-6 py-12 text-center">
				<span className="text-green-300 text-sm font-semibold uppercase tracking-widest">
					Shop
				</span>
				<h1 className="font-display text-4xl font-bold text-white mt-2">
					Place an Order
				</h1>
				<p className="text-green-200 mt-3 max-w-md mx-auto text-sm">
					Fill in your details and we'll get your plants delivered within 3 days.
				</p>
			</div>

			{/* Form card */}
			<div className="max-w-2xl mx-auto px-4 py-12">
				<div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-8">
					<form onSubmit={handleSubmit} className="flex flex-col gap-6">
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
							<div>
								<label htmlFor="name" className={labelClass}>Full Name</label>
								<input
									id="name" type="text" name="name"
									value={formData.name} onChange={handleInput}
									placeholder="Your full name" required
									className={inputClass}
								/>
							</div>
							<div>
								<label htmlFor="email" className={labelClass}>Email Address</label>
								<input
									id="email" type="email" name="email"
									value={formData.email} onChange={handleInput}
									placeholder="you@example.com" required
									className={inputClass}
								/>
							</div>
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
							<div>
								<label htmlFor="state" className={labelClass}>State</label>
								<select
									id="state" name="state"
									value={formData.state} onChange={handleInput} required
									className={inputClass}
								>
									<option value="">Select State</option>
									{states.map((s) => (
										<option key={s} value={s}>{s}</option>
									))}
								</select>
							</div>
							<div>
								<label htmlFor="city" className={labelClass}>City</label>
								<input
									id="city" type="text" name="city"
									value={formData.city} onChange={handleInput}
									placeholder="Your city" required
									className={inputClass}
								/>
							</div>
						</div>

						<div>
							<label htmlFor="order" className={labelClass}>Your Order</label>
							<textarea
								id="order" name="order" rows={5}
								value={formData.order} onChange={handleInput}
								placeholder="Describe what you'd like to order - plant names, quantities, any special requests..."
								className={`${inputClass} resize-none`}
							/>
						</div>

						{error && <Alert msg={error} />}

						<button
							type="submit"
							className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3.5 rounded-full transition-colors text-sm"
						>
							Submit Order
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default OrderPage;
