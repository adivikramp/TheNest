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
	const { user, setUser } = useContext(UserContext);
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
		<div className="min-h-screen bg-stone-50">
			{/* Header */}
			<div className="bg-green-800 px-6 py-10">
				<div className="max-w-6xl mx-auto">
					<p className="text-green-300 text-sm font-semibold uppercase tracking-widest mb-1">
						Dashboard
					</p>
					<h1 className="font-display text-3xl font-bold text-white">
						Welcome back{user.email ? `, ${user.email.split("@")[0]}` : ""}
					</h1>
					<div className="flex gap-6 mt-6">
						<div className="bg-green-700/50 rounded-xl px-5 py-3 text-center">
							<p className="text-2xl font-bold text-white">
								{user.orders?.length ?? 0}
							</p>
							<p className="text-green-200 text-xs mt-0.5">Orders</p>
						</div>
						<div className="bg-green-700/50 rounded-xl px-5 py-3 text-center">
							<p className="text-2xl font-bold text-white">
								{user.feedbacks?.length ?? 0}
							</p>
							<p className="text-green-200 text-xs mt-0.5">Feedbacks</p>
						</div>
					</div>
				</div>
			</div>

			{/* Content */}
			<div className="max-w-6xl mx-auto px-6 py-10">
				{loading ? (
					<div className="flex justify-center items-center py-20">
						<i className="fa-solid fa-spinner animate-spin text-3xl text-green-600" />
					</div>
				) : (
					<>
						{/* Orders */}
						<section className="mb-12">
							<div className="flex items-center gap-3 mb-6">
								<h2 className="font-display text-2xl font-bold text-stone-800">
									Orders
								</h2>
								<span className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full">
									{user.orders?.length ?? 0}
								</span>
								<Link
									to="/order"
									className="ml-auto text-sm font-medium text-green-700 hover:text-green-800 hover:underline transition"
								>
									+ New Order
								</Link>
							</div>
							{user.orders?.length ? (
								<div className="flex flex-wrap">
									{user.orders.map((order) => (
										<OrderComp key={order._id} order={order} />
									))}
								</div>
							) : (
								<div className="bg-white border border-stone-200 rounded-2xl p-10 text-center">
									<p className="text-stone-500 text-sm">No orders yet.</p>
									<Link
										to="/order"
										className="inline-block mt-4 bg-green-700 text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-green-800 transition"
									>
										Place First Order
									</Link>
								</div>
							)}
						</section>

						{/* Feedbacks */}
						<section>
							<div className="flex items-center gap-3 mb-6">
								<h2 className="font-display text-2xl font-bold text-stone-800">
									Feedbacks
								</h2>
								<span className="bg-pink-100 text-pink-700 text-xs font-semibold px-2.5 py-1 rounded-full">
									{user.feedbacks?.length ?? 0}
								</span>
								<Link
									to="/feedback"
									className="ml-auto text-sm font-medium text-green-700 hover:text-green-800 hover:underline transition"
								>
									+ New Feedback
								</Link>
							</div>
							{user.feedbacks?.length ? (
								<div className="flex flex-wrap">
									{user.feedbacks.map((feedback) => (
										<FeedbackComp key={feedback._id} feedback={feedback} />
									))}
								</div>
							) : (
								<div className="bg-white border border-stone-200 rounded-2xl p-10 text-center">
									<p className="text-stone-500 text-sm">No feedbacks yet.</p>
									<Link
										to="/feedback"
										className="inline-block mt-4 bg-pink-600 text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-pink-700 transition"
									>
										Leave Feedback
									</Link>
								</div>
							)}
						</section>
					</>
				)}
			</div>
		</div>
	);
};

export default DashboardPage;
