const OrderComp = ({ order }) => {
	return (
		<div className="bg-white border border-stone-200 rounded-2xl p-5 w-72 m-3 flex gap-4 shadow-sm hover:shadow-md transition-shadow">
			<div className="shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="w-5 h-5 text-green-700"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
				>
					<path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
				</svg>
			</div>
			<div className="flex flex-col gap-1 min-w-0">
				<p className="font-semibold text-stone-800 text-sm truncate">{order.name}</p>
				<p className="text-xs text-stone-500">{order.city}, {order.state}</p>
				<div className="mt-2 pt-2 border-t border-stone-100">
					<p className="text-xs text-stone-600 font-medium mb-0.5">Order</p>
					<p className="text-sm text-stone-700 line-clamp-2">{order.order}</p>
				</div>
			</div>
		</div>
	);
};

export { OrderComp };
