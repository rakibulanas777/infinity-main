import React from "react";
import styled from "styled-components";
import { AiFillEye, AiOutlinePlus } from "react-icons/ai";

import Link from "next/link";
import { MdOutlineFavorite } from "react-icons/md";
import { useProductContext } from "../../context/productcontext";
import PageNavigation from "../../components/PageNavigation";
import { useCartContext } from "../../context/cart_context";

const CatagoryProducts = () => {
	const { isLoading, products } = useProductContext();

	return (
		<div className="feature-product">
			<Wrapper>
				<div className="container py-8 mx-auto">
					<div className="bg-gray-100 p-5">
						<PageNavigation title="catagory" />

						<div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 ">
							{products.map((curElem) => {
								return <Product key={curElem.id} curElem={curElem} />;
							})}
						</div>
					</div>
				</div>
			</Wrapper>
		</div>
	);
};

export default CatagoryProducts;

const Product = ({ curElem }) => {
	const { id, name, image, category, price } = curElem;
	const { addToCart } = useCartContext();
	return (
		<div className="card h-full bg-white w-full shadow-sm rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg  border p-3">
			<div className="relative">
				<Link href={`/feature/${id}`}>
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
					<div className="font-medium text-red-500 cursor-pointer">Fr. 15</div>
				</div>
				<div className="flex items-center text-black justify-between ">
					<div className="">Softart </div>
					<div className="font-medium text-red-500 cursor-pointer">Fr. 5</div>
				</div>
			</div>
		</div>
	);
};

const Wrapper = styled.section`
	figure {
		width: auto;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		overflow: hidden;
		transition: all 0.5s linear;
		&::after {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			width: 0%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.5);
			transition: all 0.2s linear;
			cursor: pointer;
		}
		&:hover::after {
			width: 100%;
		}
		&:hover img {
			transform: scale(1.3);
		}
		img {
			height: 10rem;
			border-radius: 10px;
			transition: all 0.2s linear;
		}
	}
`;
