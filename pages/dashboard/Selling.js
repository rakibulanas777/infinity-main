import React, { useEffect, useState } from "react";

import { useProductContext } from "../../context/productcontext";

import Modal from "./Modal";
import { useUserContext } from "../../context/userContext.js";

// export const getStaticPaths = async () => {
// 	const { isLoading, products } = useProductContext();
// 	const res = await fetch(
// 		`https://infinity-maeo.onrender.com/products?name=${products.user.name}`
// 	);
// 	const data = await res.json();

// 	return {
// 		data,
// 	};
// };
const Selling = () => {
	//https://infinity-maeo.onrender.com/products?name=anas
	const [userData, setuserData] = useState(null);
	const { isLoading, products } = useProductContext();
	const { user } = useUserContext();
	useEffect(() => {
		fetch(`https://infinity-maeo.onrender.com/products?name=${user?.name}`)
			.then((res) => res.json())
			.then((data) => setuserData(data));
	}, []);
	const handleDeleteUser = (id) => {
		const proceed = window.confirm("Are you sure, you want to delete?");
		if (proceed) {
			const url = `https://infinity-maeo.onrender.com/products/${id}`;
			fetch(url, {
				method: "DELETE",
			})
				.then((res) => res.json())
				.then((data) => {
					alert("deleted successfully");
					const remainingUsers = userData.filter(
						(product) => product._id !== id
					);
					setuserData(remainingUsers);
				});
		}
	};
	return (
		<div className=" text-black bg-gray-100 p-5 text-center">
			{/* {userData ? (
				<>
					<div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 mb-4">
						{userData.map((curElem) => {
							return (
								<Product
									key={curElem.id}
									handleDeleteUser={handleDeleteUser}
									curElem={curElem}
								/>
							);
						})}
					</div>
				</>
			) : (
				<div>
					<div className="text-2xl text-center font-medium pb-5">
						It's still pretty empty here...
					</div>
					<div className="text-md text-center pb-5">
						Post unused items - countless buyers are looking forward to it!
					</div>
				</div>
			)} */}

			{/* The button to open modal */}
			{/* <label
				htmlFor="booking-modal"
				className="btn text-white hover:bg-red-600 hover:border-red-600 border-red-500 bg-red-500"
			>
				Add products
			</label> */}

			<Modal title="Add products" />
		</div>
	);
};

export default Selling;
