"use client";
import { useUserDetails } from "@/context/zustand";
import { db } from "@/firebase";
import { auth } from "@/firebase";
import { get, ref, set, update } from "firebase/database";
import toast from "react-hot-toast";

const CheckoutCard = ({ event }) => {
  const { user } = useUserDetails();
  function removeFromCart() {}

  return (
    <div className="nft flex items-center cursor-pointer	">
      <div className="main w-full flex items-center gap-3">
        <img className="tokenImage" src={event.eventImage.image} alt="image" />
        <div className="flex items-center w-full justify-between">
          <h2 className="title text-lg font-semibold">{event.eventTitle}</h2>
          <h2 className="title text-lg font-semibold">
            ₹ {event.registrationFee}
          </h2>
        </div>
        <div
          className="tokenInfo w-full cursor-pointer hover:text-black"
          onClick={removeFromCart}
        >
          <button className="price text-[#ee83e5] hover:text-black duration-200 ease-in-out w-full text-center rounded-md hover:bg-[#ee83e5] ">
            Remove from Cart
          </button>
        </div>
        <hr />
        <div className="creator">
          <div className="wrapper">
            <img src={event.clubImage.image} />
          </div>
          <p>
            <ins>Creation of</ins> {event.club}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCard;
