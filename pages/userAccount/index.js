import React, { useState } from "react";
import UserDetails from "./UserDetails";

const Useraccount = () => {
	const [tab, setTab] = useState(1);
	const handleTab = (x) => {
		setTab(x);
	};
	return (
		<div className="useraccount">
			<div className="container py-8 mx-auto">
				<div className="text-2xl text-black text-center font-semibold uppercase pb-5">
					user account
				</div>
				<div className="grid grid-cols-6">
					<div className="flex flex-col  shadow-md p-3 rounded-sm border-b-2 ">
						<div
							className={
								tab === 1
									? "text-md font-semibold uppercase cursor-pointer border-b-2  text-red-500 bg-gray-100 p-3"
									: "text-md font-semibold uppercase cursor-pointer  text-black p-3"
							}
							onClick={() => handleTab(1)}
						>
							Edit profile
						</div>
						<div
							className={
								tab === 2
									? "text-md font-semibold uppercase cursor-pointer border-b-2  text-red-500 bg-gray-100 p-3"
									: "text-md font-semibold uppercase cursor-pointer  text-black p-3"
							}
							onClick={() => handleTab(2)}
						>
							Selling
						</div>
						<div
							className={
								tab === 3
									? "text-md font-semibold uppercase cursor-pointer border-b-2  text-red-500 bg-gray-100 p-3"
									: "text-md font-semibold uppercase cursor-pointer  text-black p-3"
							}
							onClick={() => handleTab(3)}
						>
							Sold
						</div>
						<div
							className={
								tab === 4
									? "text-md font-semibold uppercase cursor-pointer border-b-2  text-red-500 bg-gray-100 p-3"
									: "text-md font-semibold uppercase cursor-pointer  text-black p-3"
							}
							onClick={() => handleTab(4)}
						>
							fees
						</div>
					</div>

					{tab == 1 && (
						<div className="col-span-5 shadow-sm p-3">
							<UserDetails />
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Useraccount;
