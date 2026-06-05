const CarouselItem = ({ imgSrc, title, description }) => {
	return (
		<div className="relative h-full w-full">
			<img src={imgSrc} alt={title} className="h-full w-full object-cover" />
			<div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
				<div className="w-3/4 text-center md:w-2/4">
					<h1 className="mb-4 text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
						{title}
					</h1>
					<p className="mb-12 text-xl text-white opacity-80">{description}</p>
				</div>
			</div>
		</div>
	);
};

export { CarouselItem };
