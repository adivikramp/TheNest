import { createContext, useState } from "react";

export const FormContext = createContext();

const FormProvider = ({ children }) => {
	const [orders, setOrders] = useState([]);
	const [feedbacks, setFeedbacks] = useState([]);

	return (
		<FormContext.Provider
			value={{ orders, setOrders, feedbacks, setFeedbacks }}
		>
			{children}
		</FormContext.Provider>
	);
};

export { FormProvider };
