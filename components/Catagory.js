/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import data from "./data";

const Catagory = () => {
	const { products } = data;
	return (
		<div className="pt-8">
			<div className="container  mx-auto bg-gray-100 p-8">
				<div className=" p-4 ">
					<div className="flex flex-wrap gap-3 ">
						{products.map((catagory, index) => (
							<Catagories key={catagory.id} catagory={catagory} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Catagory;

const Catagories = ({ key, catagory }) => {
	return (
		<>
			<Link href="/catagory">
				<div className="p-4 bg-white shadow-sm flex flex-col text-center items-center  cursor-pointer  rounded">
					<div className="inline-flex items-center justify-center rounded-full cursor-pointer  mb-2 flex-shrink-0">
						<img src={catagory.image} alt="" className="h-8" />
					</div>
					<div className="flex-grow">
						<h2 className="text-gray-900 text-lg title-font font-medium mb-3">
							{catagory.catagory}
						</h2>
					</div>
				</div>
			</Link>
		</>
	);
};
