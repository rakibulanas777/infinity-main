import React from "react";
import Navbar from "./Navbar";
import Catagory from "./Catagory";
import Footer from "./Footer";

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
