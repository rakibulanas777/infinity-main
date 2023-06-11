import React from "react";
import { useUserContext } from "../../context/userContext";

const UserDetails = () => {
	const { user } = useUserContext();
	console.log(user);
	return (
		<div className="bg-gray-100 text-black p-5">
			<div className="grid grid-cols-1">
				<div>
					<div className="text-2xl text-center capitalize text-black font-semibold pb-2">
						Edit profile
					</div>
					<div className="shadow p-5">
						<div className="w-32 h-32 text-center mx-auto rounded-full bg-red-700"></div>
						<input
							type="file"
							placeholder="Upload picture"
							className="text-center mx-auto block"
						/>
						<div className="mb-2">
							<label className="block text-gray-700 text-sm  mb-2" for="name">
								Your Name
							</label>
							<input
								className="shadow-sm appearance-none border bg-white rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
								id="name"
								type="name"
								placeholder={user?.data?.user?.name}
							/>
						</div>
						<div className="mb-2">
							<label className="block text-gray-900 text-sm  mb-2" for="email">
								Email
							</label>
							<input
								className="shadow-sm appearance-none border bg-white rounded w-full py-2 px-3 text-gray-900 mb-3 leading-tight focus:outline-none focus:shadow-outline"
								id="email"
								type="email"
								placeholder={user?.data?.user?.email}
								disabled
							/>
						</div>
						<div className="flex gap-3 mb-2">
							<div className="mb-2 w-full">
								<label
									className="block text-gray-700 text-sm  mb-2"
									for="password"
								>
									Current Password
								</label>
								<input
									className="shadow-sm appearance-none border bg-white rounded w-full py-2 px-3  text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
									id="password"
									type="password"
									placeholder="******************"
								/>
							</div>
							<div className="mb-2 w-full">
								<label
									className="block w-ful text-gray-700 text-sm  mb-2"
									for="password"
								>
									New Password
								</label>
								<input
									className="shadow-sm appearance-none border bg-white rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
									id="password"
									type="password"
									placeholder="******************"
								/>
							</div>
						</div>
						<div className="flex gap-3 mb-2">
							<div className="mb-2 w-full">
								<label
									className="block text-gray-700 text-sm  mb-2"
									for="password"
								>
									Current Password
								</label>
								<input
									className="shadow-sm appearance-none border bg-white rounded w-full py-2 px-3  text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
									id="password"
									type="password"
									placeholder="******************"
								/>
							</div>
							<div className="mb-2 w-full">
								<label
									className="block w-ful text-gray-700 text-sm  mb-2"
									for="password"
								>
									New Password
								</label>
								<input
									className="shadow-sm appearance-none border bg-white rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
									id="password"
									type="password"
									placeholder="******************"
								/>
							</div>
						</div>

						<div className="flex gap-5">
							<button
								type="submit "
								className="btn btn-error btn-sm text-white bg-red-500"
							>
								reset
							</button>
							<button
								type="submit "
								className="btn btn-success btn-sm text-white"
							>
								save
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserDetails;
