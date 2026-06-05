import { Link } from "react-router-dom";
import { Carousel } from "../components/Carousel";
import { CardItem } from "../components/CardItem";
import { CarouselItem } from "../components/CarouselItem";
import CarouselData from "../data/CarouselData.json";

const features = [
	{
		icon: "🚚",
		title: "Free Home Delivery",
		desc: "Secure and timely delivery to your doorstep across all cities.",
	},
	{
		icon: "🌿",
		title: "100+ Plant Varieties",
		desc: "Indoor, outdoor, flowering, and succulents - all in one place.",
	},
	{
		icon: "🛠️",
		title: "Quality Garden Tools",
		desc: "Professional-grade tools for both beginners and seasoned gardeners.",
	},
];

const HomePage = () => {
	return (
		<div className="flex flex-col">
			{/* Hero */}
			<section
				className="relative min-h-screen flex items-center justify-center text-white"
				style={{
					backgroundImage:
						"linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.45)), url('./images/back1.jpg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
					<span className="inline-block text-green-400 text-sm font-semibold uppercase tracking-widest mb-6">
						Welcome to The Nest
					</span>
					<h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
						Grow Your Garden Story
					</h1>
					<p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
						Discover handpicked plants, premium tools, and expert care tips -
						everything your garden needs, delivered to your door.
					</p>
					<div className="flex flex-wrap gap-4 justify-center">
						<Link
							to="/plantkingdom"
							className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3.5 rounded-full transition-colors duration-300"
						>
							Shop Plants
						</Link>
						<Link
							to="/order"
							className="border-2 border-white/70 hover:border-white text-white hover:bg-white hover:text-stone-900 font-semibold px-8 py-3.5 rounded-full transition-all duration-300"
						>
							Place an Order
						</Link>
					</div>
				</div>

				{/* Scroll indicator */}
				<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 animate-bounce">
					<span className="text-xs tracking-widest uppercase">Scroll</span>
					<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
					</svg>
				</div>
			</section>

			{/* Feature strip */}
			<section className="bg-green-800 py-12">
				<div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
					{features.map(({ icon, title, desc }) => (
						<div key={title} className="flex items-start gap-4">
							<span className="text-3xl shrink-0">{icon}</span>
							<div>
								<h3 className="text-white font-semibold mb-1">{title}</h3>
								<p className="text-green-200 text-sm leading-relaxed">{desc}</p>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Services Carousel */}
			<section className="bg-stone-50 py-20 px-4">
				<div className="max-w-5xl mx-auto">
					<div className="text-center mb-12">
						<span className="text-green-600 text-sm font-semibold uppercase tracking-widest">
							What We Offer
						</span>
						<h2 className="font-display text-4xl md:text-5xl font-bold text-stone-800 mt-2">
							Services We Provide
						</h2>
						<p className="text-stone-500 mt-4 max-w-xl mx-auto">
							The sole reason we are in business is to make your gardening
							journey as effortless as possible.
						</p>
					</div>
					<Carousel className="rounded-2xl h-96 w-full shadow-xl overflow-hidden">
						{CarouselData.map((item) => (
							<CarouselItem
								key={item.title}
								imgSrc={item.imgSrc}
								title={item.title}
								description={item.description}
							/>
						))}
					</Carousel>
				</div>
			</section>

			{/* Cities */}
			<section className="bg-white py-20 px-4">
				<div className="max-w-5xl mx-auto flex flex-col items-center">
					<div className="text-center mb-12">
						<span className="text-green-600 text-sm font-semibold uppercase tracking-widest">
							Our Branches
						</span>
						<h2 className="font-display text-4xl md:text-5xl font-bold text-stone-800 mt-2">
							Cities We Operate In
						</h2>
						<p className="text-stone-500 mt-4 max-w-2xl mx-auto">
							Spreading greenery across India - find your nearest branch and
							bring nature closer to home.
						</p>
					</div>
					<CardItem />
				</div>
			</section>

			{/* CTA Banner */}
			<section className="bg-green-700 py-16 px-6 text-center">
				<h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
					Ready to Start Growing?
				</h2>
				<p className="text-green-100 mb-8 max-w-md mx-auto">
					Join thousands of happy gardeners. Order today and get your plants
					delivered within 3 days.
				</p>
				<Link
					to="/register"
					className="inline-block bg-white text-green-800 font-semibold px-8 py-3.5 rounded-full hover:bg-green-50 transition-colors"
				>
					Create Free Account
				</Link>
			</section>
		</div>
	);
};

export default HomePage;
