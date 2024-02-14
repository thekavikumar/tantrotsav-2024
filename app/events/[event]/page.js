"use client";
import EventCard from "@/components/EventCard";
import { getEventById } from "@/sanity/sanity.query";
import React from "react";
import Image from "next/image";

/*<p>Name: {item.eventTitle}</p>
			<p>ID: {item._id}</p> */
const ListItem = ({ item }) => {
	console.log(item.eventImage.image);
	return (
		<div className="">
			<div className="pt-[7%] pl-[7%] flex flex-col md:flex-row gap-10">
				<div className=" pt-14 md:pt-2">
					<Image
						src={item.eventImage.image}
						height={500}
						width={500}
						alt="eventimage"
					/>
					<div className="flex flex-row justify-between">
						<div>Club</div>
						<div className="font-semibold hover:border-l-4 transition-all hover:font-bold outline-1 p-2 hover:bg-white hover:text-black ">
							Add to cart
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-5 col-span-1 sm:row-span-1 pb-24 md: p-2">
					<div>
						<h1 className="text-3xl">{item.eventTitle}</h1>
					</div>
					<div>
						<p>{item.eventDescription}</p>
					</div>
					<div className="flex flex-row gap-1">
						<p>Registration Fee : {item.registrationFee}</p>
					</div>
					<div>
						<p>Venue : {item.venue}</p>
					</div>
					<div className="flex flex-row gap-10">
						<div className="flex flex-col">
							<p>First Price : </p>
							<p>Second Price : </p>
							<p>Third Price : </p>
						</div>
						<div className="flex flex-col">
							<p>{item.firstPrice}</p>
							<p>{item.secondPrice}</p>
							<p>{item.thirdPrice}</p>
						</div>
					</div>
					<div className="flex flex-row gap-2 ">
						<p>Hosted by : {item.club}</p>
					</div>
				</div>
			</div>
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
