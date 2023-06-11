import Link from "next/link";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useCartContext } from "../../context/cart_context";
import Modal from "./Modal";

const Product = ({ curElem, handleDeleteUser }) => {
	const { _id, user, id, name, image, category, price } = curElem;
	const { addToCart } = useCartContext();

	return (
		<>
			<div className="card h-full bg-white w-full shadow-sm rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg  border p-3">
				<div className="flex items-center justify-between">
					<div className="flex space-x-2 cursor-pointer items-center mb-3">
						{user ? (
							<div className="text-white rounded-full text-2xl w-8 h-8 bg-red-500 relative">
								<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
									{user.name.charAt(0)}
								</div>
							</div>
						) : (
							<div className="avatar">
								<div className="w-6 rounded-xl">
									<img src="/next.svg" />
								</div>
							</div>
						)}

						<div className="text-xl font-semibold text-blue-900">
							@{user.name}
						</div>
					</div>
					<div className="dropdown dropdown-end">
						<label tabIndex={0} className=" text-black text-2xl cursor-pointer">
							<BsThreeDotsVertical />
						</label>
						<ul
							tabIndex={0}
							className="menu menu-compact dropdown-content mt-1 p-2 shadow bg-white rounded-box"
						>
							<li onClick={() => handleDeleteUser(_id)}>
								<a>delete</a>
							</li>
							<label htmlFor="booking-modal">
								<a>update</a>
							</label>
						</ul>
					</div>
				</div>

				<div className="relative">
					<Link href={`/feature/${_id}`}>
						<figure>
							<img src={image} alt={name} />
						</figure>
					</Link>
					<div
						className="absolute top-2 right-2"
						onClick={() => addToCart(curElem)}
					>
						<div className="shadow-sm text-white bg-red-500 hover:bg-red-700  cursor-pointer p-5  rounded-full  relative">
							<AiOutlinePlus className="absolute text-xl font-medium top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 " />
						</div>
					</div>
				</div>
				<div className="card-data">
					<div className="flex items-center text-black justify-between mt-3">
						<div className="font-medium">Timberland</div>
						<div className="font-medium">3 bids</div>
					</div>
					<div className="flex items-center text-black justify-between">
						<div className="">0 Gebote</div>
						<div className="font-medium text-red-500 cursor-pointer">
							Fr. 15
						</div>
					</div>
					<div className="flex items-center text-black justify-between ">
						<div className="">Softart </div>
						<div className="font-medium text-red-500 cursor-pointer">Fr. 5</div>
					</div>
				</div>
			</div>
			<Modal title="update products" id={_id} />
		</>
	);
};

export default Product;
