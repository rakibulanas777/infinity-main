import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { AiFillClockCircle, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import MyImage from "../../components/MyImage";
import PageNavigation from "../../components/PageNavigation";
import Meta from "../../components/Meta";
import { useCartContext } from "../../context/cart_context";
import { useUserContext } from "../../context/userContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API = "https://infinity-maeo.onrender.com/products";

export const getStaticPaths = async () => {
	const res = await fetch(API);
	const data = await res.json();

	const paths = data.map((post) => {
		return {
			params: { _id: post._id.toString() },
		};
	});
	return {
		paths,
		fallback: false,
	};
};

export async function getStaticProps(context) {
	const id = context.params._id;
	console.log(id);
	const res = await fetch(`https://infinity-maeo.onrender.com/products/${id}`);
	const product = await res.json();
	return {
		props: {
			product: product,
		},
	};
}

const featureDetails = ({ product }) => {
	const {
		_id,
		user,
		name,
		company,
		price,
		description,
		category,
		stock,
		createdAt,
		stars,
		reviews,
		image,
	} = product;
	console.log(_id)
	const { addToCart } = useCartContext();
	const { customer,getBids,Bids} = useUserContext();
	console.log(Bids)
	
	let [bidsPrice,setBidsprice]=useState(price)
	const decreasePrice=()=>{
		if(price<bidsPrice){
			setBidsprice(bidsPrice-100)
		} else{
			setBidsprice(bidsPrice)
		}
	}
	const router = useRouter();
	const handleOnBids = (event) => {
		event.preventDefault();
		const form = event.target;
		const price = form.price.value;
		const bids=1;
		const cuser=customer?.data?.user?._id
		const product=_id
		console.log(product)
		const bidsData = { price,bids,cuser,product };
		console.log(bidsData);
		fetch("https://infinity-maeo.onrender.com/bids", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(bidsData),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				getBids(bids)
				if (data) {
					toast.success("bids placed");
				
					form.reset();
					router.push("/");
				} else {
					toast.error(data.message);
				}
			});
	};


	return (
		<>
			<Meta title="feature" desc="this is descrtion" />
			<div className="pt-8">
				<div className="container mx-auto py-4 px-8 bg-white">
					<PageNavigation title={name} />

					<div className="grid grid-cols-2 gap-8  ">
						{/* product Images  */}
						<div>
							<div className="product_images bg-gray-50/[.04] border rounded mb-5 p-4">
								<img src={image} className="w-full" />
							</div>
							<div className="product-data text-sm border rounded p-4 text-black mb-5">
								<div className="grid gap-2 grid-cols-3 pb-3">
									<div>
										<div className="text-sm">Color</div>
										<div className="text-sm">Gray</div>
									</div>
									<div>
										<div className="text-sm">gender and age group</div>
										<div className="text-sm">Men's</div>
									</div>
									<div>
										<div className="text-sm">Size</div>
										<div className="text-sm">50</div>
									</div>
									<div>
										<div className="text-sm">main material</div>
										<div className="text-sm">Wool</div>
									</div>
									<div>
										<div className="text-sm">Saved</div>
										<div className="text-sm">74 kg of CO₂</div>
									</div>
									<div>
										<div className="text-sm">coat type</div>
										<div className="text-sm">50</div>
									</div>
								</div>

								<hr />
								<p className="text-sm pt-2">{description}</p>
							</div>
							<div className="product-data border rounded p-4 text-black">
								<div className="text-xl border-b-2 border-gray-200 pb-2 mb-2">
									Delivery & Payment
								</div>

								<div className="flex justify-between items-center mb-2">
									<div className="text-sm">Delivery</div>
									<div className="text-sm">B Mail package , CHF 8.00</div>
								</div>
								<div className="flex justify-between items-center">
									<div className="text-sm">payment method</div>
									<div className="text-sm">Bank Transfer</div>
								</div>
							</div>
						</div>

						{/* product dAta  */}
						<div>
							<div className="product-data border  rounded p-4 text-black mb-5">
								<div className="text-2xl mb-2 font-semibold text-blue-900">
									{name}
								</div>

								<p className="font-medium flex items-center gap-2 pb-3">
									<AiFillClockCircle />
									<span>{createdAt}</span>
								</p>
								<hr />
								<p className="text-sm mb-2">starting bid</p>
								<p className="font-semibold  mb-2">${price}</p>

								<form onSubmit={handleOnBids} className="border-b-2 border-gray-100 pb-4">

									<label
										htmlFor="offer"
										type="button"
										className="py-2 text-center cursor-pointer px-4 mt-4 rounded bg-red-500 text-white font-medium !w-full"
									>
										offer
									</label>
									<input type="checkbox" id="offer" className="modal-toggle" />
									<div className="modal">
										<div className="modal-box relative bg-white w-96 shadow">
											<label
												htmlFor="offer"
												className="btn bg-red-500 border-red-500 hover:bg-red-500 text-white btn-sm btn-circle absolute right-2 top-2"
											>
												✕
											</label>
											<h3 className="text-lg font-bold">Confrim bid</h3>
											<div className="py-4 flex items-center justify-between">
												<img src={image} alt="" className="w-24" />
												<div className="text-sm text-gray-900 font-semibold">
													{name}
												</div>
											</div>
											<div className="text-md text-gray-900 font-semibold pb-3">
												your bid
											</div>
											<div className="flex bg-gray-100 items-center justify-between px-3">
												<div className="shadow-sm text-white bg-red-500 hover:bg-red-700  cursor-pointer p-5  rounded-full  relative" onClick={decreasePrice}>
													<AiOutlineMinus className="absolute text-xl font-medium top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 " />
												</div>
												<input type="text" placeholder={price} name="price" value={bidsPrice} className="input input-bordered w-full" />
												<div className="shadow-sm text-white bg-red-500 hover:bg-red-700  cursor-pointer p-5  rounded-full  relative" onClick={()=>setBidsprice(bidsPrice+100)}>
													<AiOutlinePlus className="absolute text-xl font-medium top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 "  />
												</div>
											</div>
											<div className="form-control">
												<label className="label cursor-pointer">
													<span className="label-text text-sm text-gray-900 font-semibold">
														Pick up free
													</span>
													<input
														type="radio"
														name="radio-10"
														className="radio checked:bg-red-500"
														checked
													/>
												</label>
											</div>
											<div className="form-control">
												<label className="label cursor-pointer">
													<span className="label-text text-sm text-gray-900 font-semibold">
														B Mail package , CHF 8.50
													</span>
													<input
														type="radio"
														name="radio-10"
														className="radio checked:bg-red-500"
														checked
													/>
												</label>
											</div>
											<button
												type="submit"
												className="py-2 text-center cursor-pointer px-4 mt-4 rounded bg-red-500 text-white font-medium !w-full"
											>
												offer
											</button>
										</div>
									</div>
									<button
										className="py-2 px-4 mt-4 rounded border border-red-500 font-medium w-full"
										onClick={() => addToCart(product)}
									>
										favorite
									</button>
								</form>
								<div className="pb-3">
									<div className="text-sm">Delivery</div>
									<div className="text-md">B Mail package , CHF 8.50</div>
								</div>
								<div className="text-blue-900 text-md cursor-pointer">
									{user.name}
								</div>
								{/* <div className="product-data-info">
						<p>
							Available:
							<span> {stock > 0 ? "In Stock" : "Not Available"}</span>
						</p>
						<p>
							ID : <span> {id} </span>
						</p>
						<p>
							Brand :<span> {company} </span>
						</p>
					</div> */}
							</div>
							<div className="product-data border rounded p-4 text-black mb-5">
								<div className="text-xl border-b-2 border-gray-200 pb-2 mb-2">
									Previous bids (0)
								</div>
								<div className="text-md">There is currently no bid.</div>
							</div>
							<div className="product-data border rounded p-4 text-black">
								<div className="text-xl border-b-2 border-gray-200 pb-2 mb-2">
									questions and answers
								</div>
								<textarea
									className="textarea textarea-error bg-white w-full"
									placeholder="write some question"
								></textarea>
								<button className="py-2 px-4 mt-4 rounded bg-red-500 text-white font-medium">
									send a question
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

const Wrapper = styled.section``;

export default featureDetails;
