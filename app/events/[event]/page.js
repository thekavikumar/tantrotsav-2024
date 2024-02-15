"use client";
import EventCard from "@/components/EventCard";
import React from "react";
import Image from "next/image";
import { useUserDetails } from "@/context/zustand";
import { db } from "@/firebase";
import { get, ref, set, update } from "firebase/database";
import { urlForImage } from "@/sanity/lib/image";

/*<p>Name: {item.eventTitle}</p>
			<p>ID: {item._id}</p> */
const ListItem = ({ item }) => {
  return (
    <div className="flex w-full items-center justify-center h-screen">
      <div className=" flex flex-col max-w-6xl mx-auto md:flex-row gap-32">
        <div className="w-full h-full">
          <Image
            src={urlForImage(item.eventImage)}
            height={500}
            width={500}
            alt="eventimage"
          />
          <div className="flex flex-row pt-6 justify-between">
            <button className="price border-2 px-5 py-3 border-[#ee83e5] text-[#ee83e5] hover:text-black duration-200 ease-in-out font-bold w-full text-center rounded-md hover:bg-[#ee83e5] ">
              Add to Cart
            </button>
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
  const query = encodeURIComponent(
    `*[_type == "event" && _id == "${params.event}"]`
  );
  const event = await fetch(
    `https://hgcsqmwr.api.sanity.io/v2022-03-07/data/query/production?query=${query}`
  )
    .then((response) => response.json())
    .then((data) => data.result);

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
