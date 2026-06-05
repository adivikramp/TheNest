import { CardProduct } from "../components/CardProduct";
import { CardTool } from "../components/CardTool";
import plantKingdomData from "../data/plantKingdomData.json";
import CardToolData from "../data/plantKingdomTools.json";

const PlantKingdomPage = () => {
	return (
		<section>
			<div className="flex flex-col w-full items-center my-8">
				<h1 className="text-5xl uppercase">Plant Kingdom</h1>
				<p className="text-xl my-4">
					Buy Everything you want from here ranging from all the plants to all
					the tools you need
				</p>
			</div>
			<div>
				<div className="w-9/10 mx-auto text-center">
					<h1
						className="text-4xl underline font-bold"
						style={{ fontFamily: "'Macondo', cursive" }}
					>
						Plants We Have
					</h1>
					<div className="flex flex-wrap justify-evenly">
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
				<div className="w-9/10 mx-auto text-center my-4">
					<h1
						className="text-4xl underline font-bold"
						style={{ fontFamily: "'Macondo', cursive" }}
					>
						Tools We Have
					</h1>
					<div className="flex flex-wrap justify-evenly">
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
			</div>
		</section>
	);
};

export default PlantKingdomPage;
