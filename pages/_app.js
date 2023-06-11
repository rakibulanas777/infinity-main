import Layout from "../components/Layout";
import { CartProvider } from "../context/cart_context";
import { AppProvider } from "../context/productcontext";
import { UserProvider } from "../context/userContext";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
	return (
		<>
			<UserProvider>
				<AppProvider>
					<CartProvider>
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</CartProvider>
				</AppProvider>
			</UserProvider>
		</>
	);
}
