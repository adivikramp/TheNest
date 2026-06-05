const branches = [
	{ src: "/images/mumbai.jpg", alt: "Mumbai", city: "MUMBAI" },
	{ src: "/images/delhi.jpg", alt: "New Delhi", city: "NEW DELHI" },
	{ src: "/images/agra.jpg", alt: "Agra", city: "AGRA" },
];

const CardItem = () => {
	return (
		<div className="flex w-full justify-center text-center">
			{branches.map(({ src, alt, city }) => (
				<div
					key={city}
					className="group mx-4 basis-[32%] rounded-[10px] mb-[30px] relative overflow-hidden cursor-pointer"
				>
					<img src={src} alt={alt} className="w-full block" />
					<div className="absolute inset-0 bg-transparent group-hover:bg-cyan-900/70 transition-colors duration-500">
						<h3 className="w-full font-medium text-white text-[26px] absolute bottom-0 left-1/2 -translate-x-1/2 opacity-0 transition-all duration-500 group-hover:bottom-[49%] group-hover:opacity-100">
							{city}
						</h3>
					</div>
				</div>
			))}
		</div>
	);
};

export { CardItem };
