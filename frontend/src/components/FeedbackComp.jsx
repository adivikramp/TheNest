const FeedbackComp = ({ feedback }) => {
	return (
		<div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-8 mx-4 shadow-xl">
			<div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -top-6">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-8 w-8"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
				</svg>
			</div>
			<div className="mt-8">
				<p className="text-xl font-semibold my-2">{feedback.name}</p>
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
					<p>{feedback.state}</p>
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
					<p>{feedback.city}</p>
				</div>
				<div className="border-t-2"></div>

				<div className="flex justify-between">
					<div className="my-2">
						<div className="flex flex-col">
							<p className="my-1">
								<span className="font-bold">Product Rating:</span>{" "}
								{feedback.productRating}
							</p>
							<p>
								<span className="font-bold">Delivery Rating:</span>{" "}
								{feedback.deliveryRating}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export { FeedbackComp };
