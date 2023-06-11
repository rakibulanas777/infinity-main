import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
	const [customer, getUser] = useState(null);
	const [Bids, getBids] = useState([]);
	console.log(Bids)

	return (
		<UserContext.Provider value={{ customer, getUser,Bids,getBids }}>
			{children}
		</UserContext.Provider>
	);
};
const useUserContext = () => {
	return useContext(UserContext);
};
export { UserProvider, useUserContext };
