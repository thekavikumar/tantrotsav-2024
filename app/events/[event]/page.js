"use client";
import React from "react";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { useUserDetails } from "@/context/zustand";
import { db } from "@/firebase";
import { get, ref, set, update } from "firebase/database";
import toast from "react-hot-toast";

const ListItem = ({ item }) => {
  const { user } = useUserDetails();
  const addToCart = () => {
    const userId = user?.uid;
    const userCartRef = ref(db, "users/" + userId + "/cart/");

    // Use the get function to retrieve the data
    get(userCartRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          // User already has a cart, update the existing cart
          const currentCart = snapshot.val();

          const newCartItem = {
            id: item._id,
            eventImage: item.eventImage,
            eventTitle: item.eventTitle,
            registrationFee: item.registrationFee,
            club: item.club,
            clubImage: item.clubImage,
          };

          update(userCartRef, {
            // Assuming 'items' is an array within the cart
            cart: [...currentCart?.cart, newCartItem],
          }).then(() => {
            toast.success("Added to the cart!");
          });
        } else {
          // No existing cart, create a new cart
          const newCart = {
            cart: [
              {
                id: item._id,
                eventImage: item.eventImage,
                eventTitle: item.eventTitle,
                registrationFee: item.registrationFee,
                club: item.club,
                clubImage: item.clubImage,
              },
            ],
          };

          set(userCartRef, newCart).then(() => {
            toast.success("Added to the cart!");
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex w-full items-center justify-center h-screen">
      <div className=" flex flex-col max-w-6xl mx-auto md:flex-row gap-32">
        <div className="w-full md:pt-9 pt-[50rem] flex flex-col items-center justify-center h-full">
          <Image
            src={urlForImage(item.eventImage)}
            height={300}
            width={300}
            alt="eventImage"
            className=""
          />
          <div className="flex w-full justify-center flex-row pt-6">
            <button
              onClick={addToCart}
              disabled={!user}
              className="price border-2 px-5 py-3 border-[#ee83e5] text-[#ee83e5] hover:text-black duration-200 ease-in-out font-bold w-[300px] text-center rounded-md hover:bg-[#ee83e5] "
            >
              Add to Cart
            </button>
          </div>
        </div>
        <div className="flex share pl-11 md:pl-0 tracking-wide flex-col gap-5 col-span-1 sm:row-span-1 pb-24 md: p-2">
          <div>
            <h1 className="text-4xl font-extrabold ">{item.eventTitle}</h1>
          </div>
          <div>
            <p className="text-xl font-medium text-zinc-300">
              {item.eventDescription}
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
                First Price :{" "}
                <span className="text-lg text-zinc-300 font-medium">
                  ₹ {item.firstPrice}
                </span>
              </p>
              <p>
                Second Price :{" "}
                <span className="text-lg text-zinc-300 font-medium">
                  ₹ {item.secondPrice}
                </span>
              </p>
              <p>
                Third Price :{" "}
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
