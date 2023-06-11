import Link from "next/link";
import React, { useState } from "react";
import {
	MdBackpack,
	MdLabel,
	MdMap,
	MdMenu,
	MdOutlineFavorite,
	MdArrowDropDown,
	MdLocationOn,
} from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { FaShoppingCart, FaUser } from "react-icons/fa";

import { useCartContext } from "../context/cart_context";
import data from "./data";
import register from "./register";
import { useUserContext } from "../context/userContext";
const Navbar = () => {
	const [toggle, showToggle] = useState(false);
	const { cartItems } = useCartContext();
	const { products } = data;
	const { dashboard } = register;
	const { customer } = useUserContext();
	return (
		<>
			<div className="bg-gray-100  sticky top-0 z-50 bg-clip-padding backdrop-filter backdrop-blur-md ">
				<div className="navbar container mx-auto ">
					<div className="flex-1">
						<div className="flex items-center">
							<MdMenu
								className="text-black mr-3 text-2xl cursor-pointer"
								onClick={() => showToggle(!toggle)}
							/>
							<Link
								className="text-2xl text-black font-bold cursor-pointer hover:text-indigo-900"
								href="/"
							>
								infinity24
							</Link>
						</div>
					</div>

					<div className="input-group flex justify-center items-center">
						<div className="menu menu-horizontal">
							<li tabIndex={0}>
								<button className=" border-r-2  bg-white py-2 px-3 rounded-l-md cursor-pointer xl:flex hidden items-center gap-5">
									<div>All Categories</div>{" "}
									<MdArrowDropDown className="text-2xl" />
								</button>
								<ul className="p-2  bg-white  h-60 scroll-smooth scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-red-300 overflow-y-scroll rounded">
									{products.map((catagory, index) => (
										// eslint-disable-next-line react/jsx-key
										<li className="rounded-sm">
											<Link
												href={`/catagory/${catagory.catagory}`}
												className="rounded-sm hover:bg-red-500 hover:text-white"
											>
												{catagory.catagory}
											</Link>
										</li>
									))}
								</ul>
							</li>
						</div>
						<input
							type="text"
							placeholder="Search…"
							className=" bg-white py-2 px-3 hidden sm:inline rounded-r-none"
						/>
						<button className=" text-white sm:inline hidden bg-red-400 py-2 px-3 rounded-r-md cursor-pointer">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>
						</button>
					</div>

					<div className="flex-none gap-3">
						<div className="menu menu-horizontal">
							<li tabIndex={0}>
								{customer ? (
									<button className=" bg-white   py-2 px-8 rounded-md cursor-pointer xl:flex hidden items-center gap-5">
										{customer?.data?.user?.name}
									</button>
								) : (
									<button className=" bg-white   py-2 px-8 rounded-md cursor-pointer xl:flex hidden items-center gap-5">
										register
									</button>
								)}

								<ul className="p-2 z-100 bg-white  scroll-smooth scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-red-300 overflow-y-scroll rounded">
									<li className="rounded-sm">
										<Link
											href="/dashboard"
											className="rounded-sm btn-sm hover:bg-red-500 hover:text-white"
										>
											dashboards
										</Link>
									</li>
									{/* {dashboard.map((catagory, index) => (
										// eslint-disable-next-line react/jsx-key
										
									))} */}
									<hr />
									{!customer && (
										<>
											<Link
												href="/register"
												className="py-2 mt-2 mb-3 rounded-md px-3 bg-red-500 text-white text-center font-medium"
											>
												register
											</Link>
											<Link href="/login">
												<button className="py-2 text-gray-900 mb-3 rounded-md px-3 border-2 border-red-500 w-full font-medium">
													log in
												</button>
											</Link>
										</>
									)}
								</ul>
							</li>
						</div>
						<div className="dropdown dropdown-end text-black">
							<label tabIndex={0} className="btn btn-ghost btn-circle">
								<div className="indicator">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
										/>
									</svg>
									<span className="badge badge-sm indicator-item">
										{cartItems.length}
									</span>
								</div>
							</label>
							<div
								tabIndex={0}
								className="mt-3 card card-compact dropdown-content w-52 bg-white shadow"
							>
								<div className="card-body">
									<span className="font-bold text-lg">
										{cartItems.length} Items
									</span>

									<div className="card-actions">
										<Link href="/favorites">
											<button className="btn text-white hover:bg-red-600 hover:border-red-600 border-red-500 btn-sm bg-red-500 btn-block">
												see products
											</button>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="py-2 border-t-2 border-gray-300 bg-gray-100 text-black lg:block hidden">
				<div className="container mx-auto lg:w-11/12 gap-10  flex items-center ">
					<div
						className="flex items-center cursor-pointer mr-3"
						type="button"
						data-drawer-target="drawer-navigation"
						data-drawer-show="drawer-navigation"
						aria-controls="drawer-navigation"
					>
						<MdMap className=" mr-3 text-2xl" />
						<div className="text-md font-semibold ">All Categories</div>
					</div>
					<div className="flex items-center cursor-pointer mr-3">
						<MdLabel className=" mr-3 text-2xl" />
						<div className="text-md font-semibold ">Top products</div>
					</div>
					<div className="flex items-center cursor-pointer mr-3">
						<MdMap className=" mr-3 text-2xl" />
						<div className="text-md font-semibold ">New products</div>
					</div>
					<div className="flex items-center cursor-pointer mr-3">
						<MdLocationOn className=" mr-3 text-2xl" />
						<div className="text-md font-semibold ">Close to me</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
