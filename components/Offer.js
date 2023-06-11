/* eslint-disable @next/next/no-img-element */
import React from "react";

const Offer = () => {
	return (
		<div className="offer">
			<div className="container mx-auto pt-6">
				<div className="bg-gray-100 p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
					<div className="border-2 rounded-sm cursor-pointer border-red-500">
						<div className="flex mb-3 p-4 space-x-3 items-center">
							<img src="/assets/offer/Marktplatz.svg" className="h-16" alt="" />
							<div className="text-gray-900 text-lg">Marktplatz</div>
						</div>
						<div className="bottom p-3 rounded-sm text-sm text-white bg-red-500">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						</div>
					</div>
					<div className="border-2 rounded-sm cursor-pointer border-red-500">
						<div className="flex mb-3 p-4 space-x-3 items-center ">
							<img
								src="/assets/offer/Auto & Zubehör.svg"
								className="h-16"
								alt=""
							/>
							<div className="text-gray-900 text-lg">Auto & Zubehor</div>
						</div>
						<div className="bottom p-3 rounded-sm text-sm text-white bg-red-500">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						</div>
					</div>
					<div className="border-2 rounded-sm cursor-pointer border-red-500">
						<div className="flex mb-3 p-4 space-x-3 items-center ">
							<img src="/assets/offer/Werbung.svg" className="h-16" alt="" />
							<div className="text-gray-900 text-lg">Werbung</div>
						</div>
						<div className="bottom p-3 rounded-sm text-sm text-white bg-red-500">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Offer;
