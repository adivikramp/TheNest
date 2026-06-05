const branches = [
	{ src: "/images/mumbai.jpg", alt: "Mumbai", city: "Mumbai" },
	{ src: "/images/delhi.jpg", alt: "New Delhi", city: "New Delhi" },
	{ src: "/images/agra.jpg", alt: "Agra", city: "Agra" },
];

const CardItem = () => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-5xl px-4">
			{branches.map(({ src, alt, city }) => (
				<div
					key={city}
					className="group relative rounded-2xl overflow-hidden aspect-square shadow-md cursor-pointer"
				>
					<img
						src={src}
						alt={alt}
						className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
					<div className="absolute bottom-0 left-0 right-0 p-6">
						<p className="text-xs text-green-300 uppercase tracking-widest mb-1">
							Branch
						</p>
						<h3 className="font-display text-2xl text-white font-semibold">
							{city}
						</h3>
					</div>
				</div>
			))}
		</div>
	);
};

export { CardItem };
