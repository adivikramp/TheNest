import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import FeedbackPage from "./pages/forms/Feedback";
import OrderPage from "./pages/forms/Order";
import HomePage from "./pages/Home";
import Layout from "./pages/Layout";
import PlantKingdomPage from "./pages/PlantKingdom";
import DashboardPage from "./pages/users/Dashboard";
import LoginPage from "./pages/users/Login";
import RegisterPage from "./pages/users/Register";
import { AuthRoutes } from "./routes/AuthRoutes";
import { GuestRoutes } from "./routes/GuestRoutes";

function App() {
	return (
		<BrowserRouter>
			<main className="h-screen">
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<HomePage />} />
						<Route path="plantkingdom" element={<PlantKingdomPage />} />

						<Route element={<AuthRoutes />}>
							<Route path="dashboard" element={<DashboardPage />} />
							<Route path="order" element={<OrderPage />} />
							<Route path="feedback" element={<FeedbackPage />} />
						</Route>

						<Route element={<GuestRoutes />}>
							<Route path="login" element={<LoginPage />} />
							<Route path="register" element={<RegisterPage />} />
						</Route>
					</Route>
				</Routes>

				<Footer />
			</main>
		</BrowserRouter>
	);
}

export default App;
