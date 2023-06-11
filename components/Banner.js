import React from "react";
import Image from "next/legacy/image";
import "slick-carousel/slick/slick.css";
import styles from "../styles/Banner.module.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Banner = () => {
	const settings = {
		dots: true,
		infinite: true,

		slidesToShow: 1,
		autoplay: true,
		speed: 4000,
		lazyLoad: true,
		fade: true,
		cssEase: "linear",
		slidesToScroll: 1,
	};
	return (
		<>
			<div className="container mx-auto pt-6">
				<div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
					<div className="lg:col-span-3 col-span-2 lg:row-span-2 rounded-sm bg-gray-100 p-4">
						<Slider {...settings}>
							<div className={styles.flexBox}>
								<div className="left p-4">
									<div className="text-md text-red-600 font-semibold mb-2">
										Lorem ipsum dolor
									</div>
									<div className="text-xl text-black font-semibold mb-1">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
									</div>
									<div className=" text-gray-900 font-semibold mb-1 line-through">
										$225
									</div>
									<div className="text-xl text-green-600 font-semibold mb-2">
										$200.00
									</div>
									<button className="py-1 rounded-md px-3 bg-red-500 text-white font-medium">
										shop now
									</button>
								</div>
								<div className="p-4">
									<img
										alt="explore"
										src="https://links.papareact.com/41m"
										className="rounded-lg h-32 w-48"
									/>
								</div>
							</div>
							<div className={styles.flexBox}>
								<div className="lef">
									<div className="text-md text-red-600 font-semibold mb-2">
										Lorem ipsum dolor
									</div>
									<div className="text-xl text-black font-semibold mb-1">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
									</div>
									<div className=" text-gray-900 font-semibold mb-1 line-through">
										$225
									</div>
									<div className="text-xl text-green-600 font-semibold mb-2">
										$200.00
									</div>
									<button className="py-1 rounded-md px-3 bg-green-500 text-white font-medium">
										shop now
									</button>
								</div>
								<div className="">
									<img
										alt="explore"
										src="https://links.papareact.com/41m"
										className="rounded-lg h-32 w-48"
									/>
								</div>
							</div>
						</Slider>
					</div>
					<div className="bg-gray-100 p-4 rounded-sm hidden sm:block">
						<div className="text-xl text-black font-semibold mb-1">
							Lorem ipsum dolor sit amet
						</div>
						<div className="text-xl text-green-600 font-semibold mb-2">
							$200.00
						</div>
					</div>
					<div className="bg-gray-100 p-4 rounded-sm hidden sm:block">
						<div className="text-xl text-black font-semibold mb-1">
							Lorem ipsum dolor sit amet
						</div>
						<div className="text-xl text-green-600 font-semibold mb-2">
							$200.00
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Banner;
