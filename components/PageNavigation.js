import Link from "next/link";
import React from "react";

const PageNavigation = ({ title }) => {
	return (
		<div className="text-4xl flex items-center gap-3 font-semibold py-3 mb-3 text-black">
			<Link href="/">Home/</Link>{" "}
			<span className="text-xl text-gray-300">{title}</span>
		</div>
	);
};

export default PageNavigation;
