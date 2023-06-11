import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
const Footer = () => {
	return (
		<div className="border-t-2">
			<div className="container mx-auto">
				<div className="flex items-center flex-col md:flex-row md:space-y-0 space-y-4 justify-between pt-5 pb-5 ">
					<Link
						className="text-2xl text-black font-bold cursor-pointer hover:text-red-500"
						href="/"
					>
						infinity24
					</Link>
					<div className="medium flex space-x-3">
						<div className="cursor-pointer font-semibold">Home</div>
						<div className="cursor-pointer font-semibold">Home</div>
						<div className="cursor-pointer font-semibold">Home</div>
						<div className="cursor-pointer font-semibold">Home</div>
						<div className="cursor-pointer font-semibold">Home</div>
					</div>
					<div className="flex space-x-3">
						<FaFacebookF />
						<AiOutlineTwitter />
						<BsInstagram />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
