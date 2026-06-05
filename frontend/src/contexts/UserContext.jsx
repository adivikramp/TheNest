import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
	const [user, setUser] = useState({
		email: localStorage.getItem("email"),
		orders: [],
		feedbacks: [],
	});

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};

export { UserProvider };
