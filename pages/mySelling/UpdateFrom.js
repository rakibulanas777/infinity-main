import React from "react";
import data from "../../components/data";
const UpdateFrom = ({ handleUpdateProduct, title }) => {
	const { products } = data;
	return (
		<form
			className="grid grid-cols-1 gap-3 mt-10"
			onSubmit={handleUpdateProduct}
		>
			<div className="flex gap-3">
				<input
					type="text"
					name="name"
					placeholder="product name"
					className="shadow-sm appearance-none border bg-white rounded w-full py-3 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline"
				/>

				<input
					name="company"
					type="text"
					placeholder="company name"
					className="shadow-sm appearance-none border bg-white rounded w-full py-3 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline"
				/>
			</div>
			<div className="flex gap-3">
				<input
					type="text"
					name="price"
					placeholder="price"
					className="shadow-sm appearance-none border bg-white rounded w-full py-3 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline"
				/>
				{/* <input
					type="text"
					name="file"
					placeholder="img"
					className="shadow-sm appearance-none border bg-white rounded w-full py-3 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline"
				/> */}

				<input
					name="file"
					type="file"
					className="file-input w-full file-input-error file-input-white bg-white "
				/>
			</div>

			<textarea
				name="description"
				type="text"
				className="shadow-sm appearance-none border bg-white rounded w-full py-3 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline"
				placeholder="description"
			/>

			<div className="flex gap-3">
				<select className="select w-full max-w-xs bg-white" name="catagory">
					<option disabled selected>
						Select catagory
					</option>
					{products.map((catagory) => (
						<option>{catagory.catagory}</option>
					))}
				</select>
				<input
					className="btn text-white hover:bg-red-600 hover:border-red-600 border-red-500 bg-red-500"
					type="submit"
					value={title}
				/>
			</div>
		</form>
	);
};

export default UpdateFrom;
