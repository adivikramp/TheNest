const CardProduct = ({ imgSrc, title, price, soil, light, water }) => {
	return (
		<div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden w-56 m-3 flex flex-col">
			<div className="aspect-square overflow-hidden bg-stone-100">
				<img
					src={imgSrc}
					alt={title}
					className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
				/>
			</div>
			<div className="p-4 flex flex-col gap-3 flex-1">
				<div className="flex items-start justify-between gap-2">
					<h3 className="font-semibold text-stone-800 text-base leading-tight">
						{title}
					</h3>
					<span className="shrink-0 bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
						{price}
					</span>
				</div>
				<div className="flex flex-col gap-1.5 text-xs text-stone-500">
					<div className="flex items-start gap-1.5">
						<span className="text-green-600 mt-0.5">🌱</span>
						<span><span className="font-medium text-stone-600">Soil:</span> {soil}</span>
					</div>
					<div className="flex items-start gap-1.5">
						<span className="mt-0.5">☀️</span>
						<span><span className="font-medium text-stone-600">Light:</span> {light}</span>
					</div>
					<div className="flex items-start gap-1.5">
						<span className="mt-0.5">💧</span>
						<span><span className="font-medium text-stone-600">Water:</span> {water}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export { CardProduct };
