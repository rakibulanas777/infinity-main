import Head from "next/head";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import {
	MdBackpack,
	MdLabel,
	MdMap,
	MdMenu,
	MdOutlineFavorite,
} from "react-icons/md";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import Link from "next/link";
import Catagory from "../components/Catagory";
import reducer from "../reducer/productReducer";
import FeatureProducts from "../components/FeatureProducts";
import Meta from "../components/Meta";
import Banner from "../components/Banner";
import Offer from "../components/Offer";

const inter = Inter({ subsets: ["latin"] });

const API = "https://infinity-maeo.onrender.com/products";

export async function getStaticProps() {
	const res = await fetch(API);
	const products = await res.json();

	return {
		props: {
			products,
		},
	};
}

export default function Home({ products }) {
	return (
		<>
			<Meta title="home page" desc="this is descrtion" />
			<Banner />
			<Offer />
			<FeatureProducts title="Artikel in der Schweiz" products={products} />
			<Catagory />
			<FeatureProducts title="Recently viewed by you" products={products} />
		</>
	);
}
