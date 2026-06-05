const OrderComp = ({ order }) => {
	return (
		<div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-8 mx-4 shadow-xl">
			<div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-8 w-8"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
				</svg>
			</div>
			<div className="mt-8">
				<p className="text-xl space-x-2 font-semibold my-2">{order.name}</p>
				<div className="flex space-x-2 text-gray-400 text-sm">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
						<path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
					</svg>
					<p>{order.state}</p>
				</div>
				<div className="flex space-x-2 text-gray-400 text-sm my-3">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
						<path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
					</svg>
					<p>{order.city}</p>
				</div>
				<div className="border-t-2"></div>

				<div className="flex justify-between">
					<div className="my-2">
						<p className="font-semibold text-base mb-2">Order</p>
						<div className="flex space-x-2">
							<p>{order.order}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export { OrderComp };
