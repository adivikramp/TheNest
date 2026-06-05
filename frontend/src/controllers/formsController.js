/* --------------------------------------------- Get user's existing orders --------------------------------------------- */
const getUserOrders = async () => {
	const response = await fetch(
		`${import.meta.env.VITE_BACKEND_URL}/api/forms/userOrders`,
		{
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		},
	);

	const data = await response.json();

	if (!response.ok) {
		throw Error(data.error);
	}

	return data;
};

/* --------------------------------------------- Get user's existing feedbacks --------------------------------------------- */
const getUserFeedback = async () => {
	const response = await fetch(
		`${import.meta.env.VITE_BACKEND_URL}/api/forms/userFeedbacks`,
		{
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		},
	);

	const data = await response.json();

	if (!response.ok) {
		throw Error(data.error);
	}

	return data;
};

/* --------------------------------------------- Create new order --------------------------------------------- */
const orderForm = async (name, email, state, city, order) => {
	if (!name || !email || !state || !city || !order) {
		throw Error("all fields are required");
	}

	const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/forms/order`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
		body: JSON.stringify({ name, email, state, city, order }),
	});

	const data = await response.json();

	console.log(data);

	if (!response.ok) {
		throw Error(data.error);
	}

	return data;
};

/* --------------------------------------------- Create new feedback --------------------------------------------- */
const feedbackForm = async (
	name,
	email,
	state,
	city,
	productRating,
	deliveryRating,
) => {
	if (!name || !email || !state || !city || !productRating || !deliveryRating) {
		throw Error("all fields are required");
	}

	const response = await fetch(
		`${import.meta.env.VITE_BACKEND_URL}/api/forms/feedback`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
			body: JSON.stringify({
				name,
				email,
				state,
				city,
				productRating,
				deliveryRating,
			}),
		},
	);

	const data = await response.json();

	if (!response.ok) {
		throw Error(data.error);
	}

	return data;
};

export { feedbackForm, getUserFeedback, getUserOrders, orderForm };
