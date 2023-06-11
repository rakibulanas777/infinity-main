import React, { useState } from "react";

const Useraccount = () => {
	const [tab, setTab] = useState(1);
	const handleTab = (x) => {
		setTab(x);
	};
	return (
		<div className="useraccount h-screen">
			<div className="container py-8 mx-auto">
				<div className="text-2xl text-black font-semibold uppercase pb-5">
					My buying
				</div>
				<div className="flex space-x-10 border-b-2 ">
					<div
						className={
							tab === 1
								? "text-md font-semibold uppercase cursor-pointer border-b-2  text-red-500 border-red-500 pb-3"
								: "text-md font-semibold uppercase cursor-pointer  text-black pb-3"
						}
						onClick={() => handleTab(1)}
					>
						bidding
					</div>
					<div
						className={
							tab === 2
								? "text-md font-semibold uppercase cursor-pointer border-b-2  text-red-500 border-red-500 pb-3"
								: "text-md font-semibold uppercase cursor-pointer  text-black pb-3"
						}
						onClick={() => handleTab(2)}
					>
						price suggestions
					</div>
					<div
						className={
							tab === 3
								? "text-md font-semibold uppercase cursor-pointer border-b-2  text-red-500 border-red-500 pb-3"
								: "text-md font-semibold uppercase cursor-pointer  text-black pb-3"
						}
						onClick={() => handleTab(3)}
					>
						Bought
					</div>
				</div>
			</div>
		</div>
	);
};

export default Useraccount;
