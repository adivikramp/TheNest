import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "../../components/Alert";
import { FormContext } from "../../contexts/FormContext";
import { feedbackForm } from "../../controllers/formsController";

const FeedbackPage = () => {
	// use Form Context
	const { feedbacks, setFeedbacks } = useContext(FormContext);

	// Error State
	const [error, setError] = useState(null);

	const navigate = useNavigate();

	// Form data state
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		state: "",
		city: "",
		productRating: "",
		deliveryRating: "",
	});

	const handleInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			// Place new feedback
			const data = await feedbackForm(
				formData.name,
				formData.email,
				formData.state,
				formData.city,
				formData.productRating,
				formData.deliveryRating,
			);
			// Update order state
			setFeedbacks([...feedbacks, data.placedFeedback]);
			// navigate to dashboard
			navigate("/dashboard");
		} catch (error) {
			setError(error.message);
		}
	};

	return (
		<div className="w-full h-auto flex flex-col items-center bg-cyan-50 py-8">
			<h2 className="text-center text-2xl font-bold mb-4 uppercase">
				Feedback Form
			</h2>
			<form
				onSubmit={handleSubmit}
				className="h-auto w-4/5 rounded-xl bg-cyan-900"
			>
				<div className="flex items-center m-4">
					<div className="w-1/5 text-xl font-bold text-white">
						<label htmlFor="name">FULL NAME</label>
					</div>
					<div className="w-4/5">
						<input
							className="w-full p-2 rounded-lg"
							type="text"
							id="name"
							name="name"
							value={formData.name}
							placeholder="Your Full Name.."
							onChange={handleInput}
							required
						/>
					</div>
				</div>
				<div className="flex items-center m-4">
					<div className="w-1/5 text-xl font-bold text-white">
						<label htmlFor="email">EMAIL ID</label>
					</div>
					<div className="w-4/5">
						<input
							className="w-full p-2 rounded-lg"
							type="email"
							id="email"
							name="email"
							value={formData.email}
							placeholder="Your Email.."
							onChange={handleInput}
							required
						/>
					</div>
				</div>
				<div className="flex items-center m-4">
					<div className="w-1/5 text-xl font-bold text-white">
						<label htmlFor="country">STATE</label>
					</div>
					<div className="w-4/5">
						<select
							className="w-full p-2 rounded-lg"
							id="state"
							name="state"
							value={formData.state}
							onChange={handleInput}
							required
						>
							<option value="none">Select State</option>
							<option value="Andhra Pradesh">Andhra Pradesh</option>
							<option value="Andaman and Nicobar Islands">
								Andaman and Nicobar Islands
							</option>
							<option value="Arunachal Pradesh">Arunachal Pradesh</option>
							<option value="Assam">Assam</option>
							<option value="Bihar">Bihar</option>
							<option value="Chandigarh">Chandigarh</option>
							<option value="Chhattisgarh">Chhattisgarh</option>
							<option value="Dadar and Nagar Haveli">
								Dadar and Nagar Haveli
							</option>
							<option value="Daman and Diu">Daman and Diu</option>
							<option value="Delhi">Delhi</option>
							<option value="Lakshadweep">Lakshadweep</option>
							<option value="Puducherry">Puducherry</option>
							<option value="Goa">Goa</option>
							<option value="Gujarat">Gujarat</option>
							<option value="Haryana">Haryana</option>
							<option value="Himachal Pradesh">Himachal Pradesh</option>
							<option value="Jammu and Kashmir">Jammu and Kashmir</option>
							<option value="Jharkhand">Jharkhand</option>
							<option value="Karnataka">Karnataka</option>
							<option value="Kerala">Kerala</option>
							<option value="Madhya Pradesh">Madhya Pradesh</option>
							<option value="Maharashtra">Maharashtra</option>
							<option value="Manipur">Manipur</option>
							<option value="Meghalaya">Meghalaya</option>
							<option value="Mizoram">Mizoram</option>
							<option value="Nagaland">Nagaland</option>
							<option value="Odisha">Odisha</option>
							<option value="Punjab">Punjab</option>
							<option value="Rajasthan">Rajasthan</option>
							<option value="Sikkim">Sikkim</option>
							<option value="Tamil Nadu">Tamil Nadu</option>
							<option value="Telangana">Telangana</option>
							<option value="Tripura">Tripura</option>
							<option value="Uttar Pradesh">Uttar Pradesh</option>
							<option value="Uttarakhand">Uttarakhand</option>
							<option value="West Bengal">West Bengal</option>
						</select>
					</div>
				</div>
				<div className="flex items-center m-4">
					<div className="w-1/5 text-xl font-bold text-white">
						<label htmlFor="city">CITY</label>
					</div>
					<div className="w-4/5">
						<input
							className="w-full p-2 rounded-lg"
							type="text"
							id="city"
							name="city"
							value={formData.city}
							placeholder="Your City.."
							onChange={handleInput}
							required
						/>
					</div>
				</div>
				<div className="flex items-center m-4">
					<div className="w-1/5 text-xl font-bold text-white">
						<label htmlFor="pro_rating">PRODUCT RATING</label>
					</div>
					<div className="w-4/5">
						<select
							className="w-full p-2 rounded-lg"
							id="productRating"
							name="productRating"
							value={formData.productRating}
							onChange={handleInput}
							required
						>
							<option value="none" disabled>
								Select Product Rating
							</option>
							<option value="Excellent">Excellent</option>
							<option value="Good">Good</option>
							<option value="Satisfactory">Satisfactory</option>
							<option value="Can Improve">Can Improve</option>
							<option value="Poor">Poor</option>
						</select>
					</div>
				</div>
				<div className="flex items-center m-4">
					<div className="w-1/5 text-xl font-bold text-white">
						<label htmlFor="del_rating">DELIVERY RATING</label>
					</div>
					<div className="w-4/5">
						<select
							className="w-full p-2 rounded-lg"
							id="deliveryRating"
							name="deliveryRating"
							value={formData.deliveryRating}
							onChange={handleInput}
							required
						>
							<option value="none" disabled>
								Select Delivery Rating
							</option>
							<option value="Excellent">Excellent</option>
							<option value="Good">Good</option>
							<option value="Satisfactory">Satisfactory</option>
							<option value="Can Improve">Can Improve</option>
							<option value="Poor">Poor</option>
						</select>
					</div>
				</div>
				<div className="flex m-4">
					<input
						type="submit"
						value="SUBMIT"
						className="cursor-pointer mx-auto bg-white text-xl text-black font-bold px-48 py-4 rounded-xl mt-12 duration-500 hover:scale-105"
					/>
				</div>
			</form>

			{error && <Alert msg={error} />}
		</div>
	);
};

export default FeedbackPage;
