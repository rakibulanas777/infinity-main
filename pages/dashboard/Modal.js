import React from "react";
import { toast, ToastContainer } from "react-toastify";
import { useUserContext } from "../../context/userContext";
import "react-toastify/dist/ReactToastify.css";
import data from "../../components/data";
import AddFrom from "./AddFrom";
import UpdateFrom from "./UpdateFrom";
const Modal = ({ title, id }) => {
	const { user } = useUserContext();
	const { products } = data;
	const handleProduct = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const company = form.company.value;
		const price = parseInt(form.price.value);
		const catagory = form.catagory.value;
		const image = form.file.value;
		const description = form.description.value;

		const product = {
			user: user,
			name,
			company,
			price,
			description,
			catagory,
			image,
		};
		console.log(product);

		// TODO: send data to the server
		// and once data is saved then close the modal
		// and display success toast
		fetch("http://localhost:8000/products", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(product),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);

				if (data) {
					toast.success("product added");
				} else {
					toast.error(data.message);
				}
			});
	};
	const handleUpdateProduct = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const company = form.company.value;
		const price = parseInt(form.price.value);
		const catagory = form.catagory.value;
		const image = form.file.value;
		const description = form.description.value;

		const product = {
			user: user,
			name,
			company,
			price,
			description,
			catagory,
			image,
		};
		console.log(product);

		// TODO: send data to the server
		// and once data is saved then close the modal
		// and display success toast
		fetch(`http://localhost:8000/products/${id}`, {
			method: "PUT",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(product),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);

				if (data) {
					toast.success("product update");
				} else {
					toast.error(data.message);
				}
			});
	};

	return (
		<>
			<div>
				<div className=" bg-gray-100 relative">
					<h2 className="text-lg font-bold">{title}</h2>
					{title === "add products" ? (
						<AddFrom handleProduct={handleProduct} title={title} />
					) : (
						<UpdateFrom
							handleUpdateProduct={handleUpdateProduct}
							title={title}
						/>
					)}

					<ToastContainer />
				</div>
			</div>
		</>
	);
};

export default Modal;
