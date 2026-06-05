import { NavLink } from "react-router-dom";
import { Carousel } from "../components/Carousel";
import { CardItem } from "../components/CardItem";
import { CarouselItem } from "../components/CarouselItem";
import CarouselData from "../data/CarouselData.json";

const HomePage = () => {
	return (
		<>
			{/* HeroSection */}
			<section className="cover bg-black w-full lg:h-4/5">
				<div className="relative flex h-full content-center items-center justify-center pt-16 pb-32">
					<div
						className="absolute top-0 h-full w-full"
						style={{
							backgroundImage:
								"linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('./images/back1.jpg')",
						}}
					/>
					<div className="w-full relative mx-auto">
						<div className="flex flex-wrap">
							<div className="mx-auto w-full px-4 text-center lg:w-11/12">
								<p className="my-8 font-semibold tracking-wider text-4xl md:text-6xl text-white">
									Your Own Nursery
								</p>
								<p className="opacity-80 my-8 text-2xl text-white">
									One stop shop for your Garden needs.
								</p>
								<NavLink to="/plantkingdom">
									<button className="border-2 border-white bg-transparent px-8 py-4 rounded-full text-white duration-500 hover:scale-105 hover:bg-white hover:text-black">
										FIND OUT MORE
									</button>
								</NavLink>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Carousel(Services) */}
			<section className="w-full h-auto flex flex-col justify-center items-center">
				<div className="flex flex-col text-center my-16">
					<h1 className="text-6xl font-bold">Services We Provide</h1>
					<p className="text-2xl mt-6">
						The sole reason we are in business is to make life less difficult
						for our clients.
					</p>
				</div>
				<Carousel className="rounded-xl h-96 w-11/12">
					{CarouselData.map((item) => (
						<CarouselItem
							key={item.title}
							imgSrc={item.imgSrc}
							title={item.title}
							description={item.description}
						/>
					))}
				</Carousel>
			</section>

			{/* Carousel(Branches) */}
			<section className="w-full h-auto flex flex-col justify-center items-center">
				<div className="flex flex-col text-center my-16">
					<h1 className="text-6xl font-bold">Cities we operate in</h1>
					<p className="text-2xl mx-8 mt-6">
						Just having satisfied customers isn’t good enough anymore. If you
						really want a booming business, you have to create raving fans and
						for that you need to spread the business.
					</p>
				</div>

				<CardItem />
			</section>
		</>
	);
};

export default HomePage;
