"use client";
import { useUserDetails, useUserTier } from "@/context/zustand";
import { db } from "@/firebase";
import { ref, set } from "firebase/database";
import React, { useEffect, useRef, useState } from "react";

const Pricing = () => {
	const [tierStatus, setTierStatus] = useState("0");
	const { user } = useUserDetails();
	const { setUserTier } = useUserTier();
	const userId = user?.uid;
	const userTierRef = ref(db, "users/" + userId + "/tier");
	const userTierStatusRef = ref(db, "users/" + userId + "/tierStatus");

	const handleTier = () => {
		console.log(tierStatus);
		set(userTierStatusRef, tierStatus);
		set(userTierRef, true);
		setUserTier(true);
	};

	const onOptionChange = (e) => {
		setTierStatus(e.target.value);
	};

	return (
		<div className="h-screen max-w-xl text-white mx-auto ">
			<div className="flex flex-col gap-8 w-full">
				<div className="flex items-center gap-10 py-6 px-12 border-2 border-white rounded-lg w-full">
					<input
						type="radio"
						id="platinum"
						value={"4"}
						name="membership"
						className="h-5 w-5"
						checked={tierStatus === "4"}
						onChange={onOptionChange}
					/>
					<label htmlFor="platinum" className="w-full cursor-pointer">
						<h3 className="text-2xl font-medium">PLATINUM PASS</h3>
						<p className="text-sm text-gray-300">
							Get 4 events for 300 rupees and a free workshop
						</p>
					</label>
				</div>
				<div className="flex items-center gap-10 py-6 px-12 border-2 border-white rounded-lg w-full">
					<input
						type="radio"
						id="gold"
						value={"3"}
						className="h-5 w-5"
						name="membership"
						checked={tierStatus === "3"}
						onChange={onOptionChange}
					/>
					<label htmlFor="gold" className="w-full cursor-pointer">
						<h3 className="text-2xl font-medium">GOLD PASS</h3>
						<p className="text-sm text-gray-300">
							Get 4 events for 300 rupees and a free workshop
						</p>
					</label>
				</div>
				<div className="flex items-center gap-10 py-6 px-12 border-2 border-white rounded-lg w-full">
					<input
						type="radio"
						id="silver"
						value={"2"}
						className="h-5 w-5"
						name="membership"
						checked={tierStatus === "2"}
						onChange={onOptionChange}
					/>
					<label htmlFor="silver" className="w-full cursor-pointer">
						<h3 className="text-2xl font-medium">SILVER PASS</h3>
						<p className="text-sm text-gray-300">
							Get 2 events for 100 rupees and a free workshop
						</p>
					</label>
				</div>
				<div className="flex items-center gap-10 py-6 px-12 border-2 border-white rounded-lg w-full">
					<input
						type="radio"
						id="normal"
						value={"0"}
						className="h-5 w-5"
						name="membership"
						checked={tierStatus === "0"}
						onChange={onOptionChange}
					/>
					<label htmlFor="normal" className="w-full cursor-pointer">
						<h3 className="text-2xl font-medium">NORMAL PASS</h3>
						<p className="text-sm text-gray-300">
							Get all events for regular price
						</p>
					</label>
				</div>
				<button
					className="price text-[#ee83e5] border-2 border-[#ee83e5] py-3 font-semibold
					hover:text-black duration-200 ease-in-out text-center rounded-md hover:bg-[#ee83e5]"
					onClick={handleTier}
				>
					NEXT
				</button>
			</div>
		</div>
	);
};

export default Pricing;
