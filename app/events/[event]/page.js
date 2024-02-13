"use client";
import EventCard from "@/components/EventCard";
import { getEventById } from "@/sanity/sanity.query";
import React from "react";

const ListItem = ({ item }) => {
	return (
		<div>
			<p>Name: {item.eventTitle}</p>
			<p>ID: {item._id}</p>
		</div>
	);
};

async function Page({ params }) {
	const event = await getEventById(params.event);
	return (
		<div className="">
			{event.map((item, index) => (
				// Step 3: Render the array of JSX elements
				<ListItem key={index} item={item} />
			))}
		</div>
	);
}

export default Page;
