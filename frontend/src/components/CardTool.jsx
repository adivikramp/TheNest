const CardTool = ({ imgSrc, title, price }) => {
	return (
		<div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden w-48 m-3 flex flex-col">
			<div className="aspect-square overflow-hidden bg-stone-100">
				<img
					src={imgSrc}
					alt={title}
					className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
				/>
			</div>
			<div className="p-4 flex flex-col gap-3 flex-1">
				<div className="flex items-center justify-between gap-2">
					<h3 className="font-semibold text-stone-800 text-sm">{title}</h3>
					<span className="shrink-0 bg-stone-100 text-stone-700 text-xs font-semibold px-2 py-1 rounded-full">
						{price}
					</span>
				</div>
			</div>
		</div>
	);
};

export { CardTool };
