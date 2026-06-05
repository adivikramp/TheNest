import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FormProvider } from "./contexts/FormContext.jsx";
import { UserProvider } from "./contexts/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<FormProvider>
		<UserProvider>
			<App />
		</UserProvider>
	</FormProvider>,
);
