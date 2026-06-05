import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FeedbackComp } from "../../components/FeedbackComp";
import { OrderComp } from "../../components/OrderComp";
import { UserContext } from "../../contexts/UserContext";
import {
	getUserFeedback,
	getUserOrders,
} from "../../controllers/formsController";

const DashboardPage = () => {
	// Use User Context
	const { user, setUser } = useContext(UserContext);

	// Loading state
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(async () => {
			const { email, userOrders } = await getUserOrders();
			const { userFeedbacks } = await getUserFeedback();
			setUser({ email, orders: userOrders, feedbacks: userFeedbacks });
			setLoading(false);
		}, 1000);
	}, []);

	return (
		<section className="w-full bg-cyan-50 py-8">
			<div className="flex flex-col w-full justify-center items-center h-auto container mx-auto">
				<h1 className="text-4xl font-bold">User Dashboard</h1>

				{loading && (
					<i className="fa-solid fa-spinner animate-spin text-3xl text-center block"></i>
				)}

				<div className="h-auto flex flex-col self-start my-4">
					<h1 className="text-2xl font-bold m-4">Orders</h1>
					<div className="flex flex-wrap">
						{user.orders &&
							user.orders.map((order) => (
								<div key={order._id}>
									<OrderComp order={order}>
										<div className="flex items-center gap-2">
											<Link
												className="fa-solid fa-pen-to-square nav-link text-green-500 hover:bg-green-200"
												title="Update"
												state={order} // Send the posts to the Update page
												to="/update"
											></Link>
										</div>
									</OrderComp>
								</div>
							))}
					</div>
				</div>

				<div className="h-auto flex flex-col self-start my-4">
					<h1 className="text-2xl font-bold m-4">Feedbacks</h1>
					<div className="flex flex-wrap">
						{user.feedbacks &&
							user.feedbacks.map((feedback) => (
								<div key={feedback._id}>
									<FeedbackComp feedback={feedback}>
										<div className="flex items-center gap-2">
											<Link
												className="fa-solid fa-pen-to-square nav-link text-green-500 hover:bg-green-200"
												title="Update"
												state={feedback} // Send the posts to the Update page
												to="/update"
											></Link>
										</div>
									</FeedbackComp>
								</div>
							))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default DashboardPage;
