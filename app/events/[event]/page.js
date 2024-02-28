import React from "react";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";

export const revalidate = 0;

const ListItem = ({ item }) => {
  return (
    <div className="flex w-full pt-28 relative z-30 items-center justify-center h-screen">
      <div className=" flex flex-col md:pt-[50px] max-w-6xl mx-auto md:flex-row gap-32">
        <div className="w-full md:pt-16 pt-[50rem] flex flex-col items-center justify-center h-full">
          <Image
            src={urlForImage(item.eventImage)}
            height={300}
            width={300}
            alt="eventImage"
            className="object-cover z-50 rounded-md hover:scale-125 transition-all duration-500 cursor-pointer"
          />
        </div>
        <div className="flex share pl-11 md:pl-0 tracking-wide flex-col gap-5 col-span-1 sm:row-span-1 pb-24 lg:mt-14 lg:min-w-[724px] flex-1">
          <h1 className=" font-bold mb-5">
            ⚠️ Note: Make sure to enter your details in profile page before
            ordering!
          </h1>
          <div>
            <h1 className="text-4xl font-extrabold ">{item.eventTitle}</h1>
          </div>
          <div className="text-justify">
            <p className="text-xl font-medium text-zinc-300">
              {item.eventDescription}
            </p>
          </div>
          <div className="flex flex-row gap-1">
            <p className="text-xl font-semibold">
              Event Date :{" "}
              <span className="text-lg text-zinc-300 font-medium">
                {" "}
                {item.date}
              </span>
            </p>
          </div>
          <div className="flex flex-row gap-1">
            <p className="text-xl font-semibold">
              Time :{" "}
              <span className="text-lg text-zinc-300 font-medium">
                {" "}
                {item.time}
              </span>
            </p>
          </div>
          <div className="flex flex-row gap-1">
            <p className="text-xl font-semibold">
              Registration Fee :{" "}
              <span className="text-lg text-zinc-300 font-medium">
                {" "}
                ₹ {item.registrationFee}
              </span>
            </p>
          </div>
          <div>
            <p className="text-xl font-semibold">
              Venue :{" "}
              <span className="font-medium text-zinc-300 text-lg">
                {item.venue}
              </span>
            </p>
          </div>
          <div className="flex flex-row gap-10">
            <div className="flex text-xl font-semibold flex-col">
              <p>
                First Prize :{" "}
                <span className="text-lg text-zinc-300 font-medium">
                  ₹ {item.firstPrice}
                </span>
              </p>
              <p>
                Second Prize :{" "}
                <span className="text-lg text-zinc-300 font-medium">
                  ₹ {item.secondPrice}
                </span>
              </p>
              <p>
                Third Prize :{" "}
                <span className="text-lg text-zinc-300 font-medium">
                  ₹ {item.thirdPrice}
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-2 ">
            <p className="text-xl font-semibold ">
              Hosted by :{" "}
              <span className="text-zinc-300 text-lg font-medium">
                {item.club}
              </span>
            </p>
          </div>
          {item.rulebook && (
            <Link
              className="cursor-pointer px-3 py-2 bg-transparent border-2 border-white hover:bg-white hover:text-black text-white rounded-md hover:scale-105 transition-all duration-500 ease-in-out font-bold w-[300px] text-center"
              href={item.rulebook}
              target="_blank"
            >
              Download Rulebook
            </Link>
          )}
        </div>
        {/* some cange */}
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
