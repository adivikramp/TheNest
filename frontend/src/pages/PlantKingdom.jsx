import { CardProduct } from "../components/CardProduct";
import { CardTool } from "../components/CardTool";
import plantKingdomData from "../data/plantKingdomData.json";
import CardToolData from "../data/plantKingdomTools.json";

const PlantKingdomPage = () => {
	return (
		<div className="flex flex-col">
			{/* Page Header */}
			<section className="bg-green-800 py-16 px-6 text-center">
				<span className="text-green-300 text-sm font-semibold uppercase tracking-widest">
					Our Collection
				</span>
				<h1 className="font-display text-4xl md:text-6xl font-bold text-white mt-2">
					Plant Kingdom
				</h1>
				<p className="text-green-200 mt-4 max-w-xl mx-auto text-base">
					Hand-picked plants and professional garden tools - curated for every
					kind of gardener.
				</p>
			</section>

			{/* Plants */}
			<section className="bg-stone-50 py-16 px-4">
				<div className="max-w-7xl mx-auto">
					<div className="flex items-center gap-4 mb-10">
						<div>
							<h2 className="font-display text-3xl font-bold text-stone-800">
								Plants
							</h2>
							<p className="text-stone-500 text-sm mt-1">
								{plantKingdomData.length} varieties available
							</p>
						</div>
						<div className="ml-auto h-0.5 flex-1 bg-stone-200 hidden md:block" />
					</div>
					<div className="flex flex-wrap justify-center">
						{plantKingdomData.map((item) => (
							<CardProduct
								key={item.title}
								imgSrc={item.imgSrc}
								title={item.title}
								price={item.price}
								soil={item.soil}
								light={item.light}
								water={item.water}
							/>
						))}
					</div>
				</div>
			</section>

			{/* Tools */}
			<section className="bg-white py-16 px-4">
				<div className="max-w-7xl mx-auto">
					<div className="flex items-center gap-4 mb-10">
						<div>
							<h2 className="font-display text-3xl font-bold text-stone-800">
								Garden Tools
							</h2>
							<p className="text-stone-500 text-sm mt-1">
								{CardToolData.length} tools in stock
							</p>
						</div>
						<div className="ml-auto h-0.5 flex-1 bg-stone-200 hidden md:block" />
					</div>
					<div className="flex flex-wrap justify-center">
						{CardToolData.map((item) => (
							<CardTool
								key={item.title}
								imgSrc={item.imgSrc}
								title={item.title}
								price={item.price}
							/>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default PlantKingdomPage;
