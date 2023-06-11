import React, { useEffect, useState } from "react";
import { useProductContext } from "../../context/productcontext";
import { useUserContext } from "../../context/userContext";
import Product from "./Product";

const MyProduct = () => {
	const [userData, setuserData] = useState(null);
	const { isLoading, products } = useProductContext();
	const { user } = useUserContext();
	useEffect(() => {
		fetch(`http://localhost:8000/products?name=${user?.name}`)
			.then((res) => res.json())
			.then((data) => setuserData(data));
	}, []);
	const handleDeleteUser = (id) => {
		const proceed = window.confirm("Are you sure, you want to delete?");
		if (proceed) {
			const url = `http://localhost:8000/products/${id}`;
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
	console.log(userData);
	return (
		<div>
			{userData ? (
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
			)}
		</div>
	);
};

export default MyProduct;
