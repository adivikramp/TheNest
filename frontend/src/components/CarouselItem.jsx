const CarouselItem = ({ imgSrc, title, description }) => {
	return (
		<div className="relative h-full w-full">
			<img src={imgSrc} alt={title} className="h-full w-full object-cover" />
			<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
			<div className="absolute inset-0 flex items-center px-12 md:px-20">
				<div className="max-w-md">
					<span className="inline-block w-12 h-1 bg-green-400 mb-6 rounded-full" />
					<h2 className="font-display text-3xl md:text-5xl text-white font-bold leading-tight mb-4">
						{title}
					</h2>
					<p className="text-green-100 text-base md:text-lg leading-relaxed">
						{description}
					</p>
				</div>
			</div>
		</div>
	);
};

export { CarouselItem };
