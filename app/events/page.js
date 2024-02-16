"use client";
import EventCard from "@/components/EventCard";
import Pricing from "@/components/Pricing";
import { useUserDetails, useUserTier } from "@/context/zustand";
import { db } from "@/firebase";
import axios from "axios";
import { get, onValue, ref, set } from "firebase/database";
import { useEffect, useState } from "react";

export const revalidate = 0;

export default async function Page() {
	const { user } = useUserDetails();
	const userId = user?.uid;
	const query = encodeURIComponent(`*[_type == "event"]`);
	const userTierRef = ref(db, "users/" + userId + "/tier");
	const { userTier, setUserTier } = useUserTier();

	useEffect(() => {
		const unsubscribe = onValue(userTierRef, (snapshot) => {
			if (snapshot.exists()) {
				const tier = snapshot.val();
				setUserTier(tier);
			}
		});
		return () => {
			// Unsubscribe when the component unmounts
			unsubscribe();
		};
	}, []);

	const events = await fetch(
		`https://hgcsqmwr.api.sanity.io/v2022-03-07/data/query/production?query=${query}`
	)
		.then((response) => response.json())
		.then((data) => data.result);

	return (
		<main className="max-w-7xl mx-auto pt-28">
			{!userTier ? (
				<Pricing />
			) : (
				events && (
					<div className="flex flex-wrap gap-6 justify-center">
						{events.map((event) => (
							<EventCard event={event} key={event._id} />
						))}
					</div>
				)
			)}
		</main>
	);
}
