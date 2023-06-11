const cartReducer = (state, action) => {
	if (action.type === "ADD_TO_CART") {
		let { product } = action.payload;

		let cartProduct;

		cartProduct = {
			id: product.id,
			name: product.name,
			image: product.image[0].url,
			price: product.price,
			max: product.stock,
		};

		return {
			...state,
			cart: [...state.cart, cartProduct],
		};
	}

	if (action.type === "REMOVE_ITEM") {
		let updatedCart = state.cart.filter(
			(curItem) => curItem.id !== action.payload
		);
		return {
			...state,
			cart: updatedCart,
		};
	}

	return state;
};

export default cartReducer;
