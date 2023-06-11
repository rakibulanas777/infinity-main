/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useCartContext } from "../../context/cart_context";
import Link from "next/link";

const Favorite = () => {
	const { cartItems, removeItem } = useCartContext();
	return (
		<>
			<div
				className={cartItems.length === 0 ? "bg-gray-100 h-96" : "bg-gray-100"}
			>
				<div className="container mx-auto py-6">
					<div className="w-full bg-white px-10 py-5 text-black rounded-md">
						<div className="flex justify-between border-b pb-8">
							<h1 className="font-semibold text-2xl">My watch list</h1>
							<h2 className="font-semibold text-2xl">
								{cartItems.length} Items
							</h2>
						</div>
						<div className="flex mt-10 mb-5">
							<h3 className="font-semibold text-gray-900 text-xs uppercase w-2/5">
								Product Details
							</h3>
							<h3 className="font-semibold text-center text-gray-900 text-xs uppercase w-1/5 ">
								Seller
							</h3>
							<h3 className="font-semibold text-center text-gray-900 text-xs uppercase w-1/5 ">
								Price
							</h3>
							<h3 className="font-semibold text-center text-gray-900 text-xs uppercase w-1/5 ">
								Bids
							</h3>
						</div>
						{cartItems.map((product) => {
							return (
								<FavoriteProducts
									key={product.id}
									product={product}
									removeItem={removeItem}
									Length={cartItems.length}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default Favorite;

const FavoriteProducts = ({ product, removeItem }) => {
	return (
		<div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
			<div className="flex w-2/5">
				<div className="w-20">
					<img className="h-24" src={product.image} alt="" />
				</div>
				<div className="flex flex-col justify-between ml-4 flex-grow">
					<span className="font-bold text-sm">{product.name}</span>
					<span className="text-red-500 text-xs">{product.company}</span>
					<div
						className="font-semibold cursor-pointer hover:text-red-500 text-gray-500 text-xs"
						onClick={() => removeItem(product)}
					>
						Remove
					</div>
				</div>
			</div>
			<Link href="/details" className="flex justify-center w-1/5 cursor-pointer">
				<span className="font-bold text-sm">{product.user.name}</span>
			</Link>
			<span className="text-center  w-1/5 font-semibold text-sm">
				{product.price}
			</span>
			<span className="text-center w-1/5 font-semibold text-sm">
				{product.bids}
			</span>
		</div>
	);
};
