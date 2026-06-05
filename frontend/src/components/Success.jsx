import { useState } from "react";

const Success = ({ msg }) => {
	const [show, setShow] = useState(true);
	setTimeout(() => setShow(false), 2000);

	if (!show) return null;

	return (
		<div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl mt-4 text-sm">
			<i className="fa-solid fa-circle-check shrink-0" />
			<span>{msg}</span>
		</div>
	);
};

export { Success };
