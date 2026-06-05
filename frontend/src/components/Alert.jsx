const Alert = ({ msg }) => {
	return (
		<div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mt-4 text-sm">
			<i className="fa-solid fa-triangle-exclamation shrink-0" />
			<span>{msg}</span>
		</div>
	);
};

export { Alert };
