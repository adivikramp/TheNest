const CardProduct = ({ imgSrc, title, price, soil, light, water }) => {
	return (
		<>
			<div className="m-4 w-1/5 shadow-2xl p-4 cursor-pointer duration-500 hover:scale-105">
				<img src={imgSrc} />
				<h1 className="text-lg font-bold">{title}</h1>
				<p>{price}</p>
				<p>Soil - {soil}</p>
				<p>Light - {light}</p>
				<p>Water - {water}</p>
			</div>
		</>
	);
};

export { CardProduct };
