import { useCallback, useEffect, useState } from "react";

const Carousel = ({ children, className = "", interval = 5000 }) => {
	const slides = Array.isArray(children) ? children : [children];
	const count = slides.length;
	const [active, setActive] = useState(0);

	const next = useCallback(() => setActive((i) => (i + 1) % count), [count]);
	const prev = () => setActive((i) => (i - 1 + count) % count);

	useEffect(() => {
		if (count <= 1) return;
		const id = setInterval(next, interval);
		return () => clearInterval(id);
	}, [count, interval, next]);

	return (
		<div className={`relative overflow-hidden ${className}`}>
			{slides.map((slide, i) => (
				<div
					// biome-ignore lint/suspicious/noArrayIndexKey: slides are static
					key={i}
					className={`absolute inset-0 transition-opacity duration-700 ${
						i === active ? "opacity-100" : "opacity-0 pointer-events-none"
					}`}
				>
					{slide}
				</div>
			))}

			{count > 1 && (
				<>
					<button
						type="button"
						onClick={prev}
						aria-label="Previous slide"
						className="absolute left-4 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/40 text-black hover:bg-white/70"
					>
						&#8249;
					</button>
					<button
						type="button"
						onClick={next}
						aria-label="Next slide"
						className="absolute right-4 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/40 text-black hover:bg-white/70"
					>
						&#8250;
					</button>
					<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
						{slides.map((_, i) => (
							<button
								type="button"
								// biome-ignore lint/suspicious/noArrayIndexKey: slides are static
								key={i}
								onClick={() => setActive(i)}
								aria-label={`Go to slide ${i + 1}`}
								className={`h-2 w-6 rounded-full transition-colors ${
									i === active ? "bg-white" : "bg-white/50"
								}`}
							/>
						))}
					</div>
				</>
			)}
		</div>
	);
};

export { Carousel };
