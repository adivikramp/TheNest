const CardTool = ({ imgSrc, title, price }) => {
	return (
		<div className="m-4 w-1/5 shadow-2xl p-4 cursor-pointer duration-500 hover:scale-105">
			<img src={imgSrc} />
			<h1 className="text-lg font-bold">{title}</h1>
			<p>{price}</p>
		</div>
	);
};

export { CardTool };
