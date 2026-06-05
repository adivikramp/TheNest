const ratingColor = (r) => {
	const map = { Excellent: "text-green-600", Good: "text-green-500", Satisfactory: "text-yellow-500", "Can Improve": "text-orange-500", Poor: "text-red-500" };
	return map[r] ?? "text-stone-600";
};

const FeedbackComp = ({ feedback }) => {
	return (
		<div className="bg-white border border-stone-200 rounded-2xl p-5 w-72 m-3 flex gap-4 shadow-sm hover:shadow-md transition-shadow">
			<div className="shrink-0 w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="w-5 h-5 text-pink-600"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
				>
					<path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
				</svg>
			</div>
			<div className="flex flex-col gap-1 min-w-0 flex-1">
				<p className="font-semibold text-stone-800 text-sm truncate">{feedback.name}</p>
				<p className="text-xs text-stone-500">{feedback.city}, {feedback.state}</p>
				<div className="mt-2 pt-2 border-t border-stone-100 flex flex-col gap-1">
					<div className="flex justify-between text-xs">
						<span className="text-stone-500">Product</span>
						<span className={`font-medium ${ratingColor(feedback.productRating)}`}>
							{feedback.productRating}
						</span>
					</div>
					<div className="flex justify-between text-xs">
						<span className="text-stone-500">Delivery</span>
						<span className={`font-medium ${ratingColor(feedback.deliveryRating)}`}>
							{feedback.deliveryRating}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export { FeedbackComp };
