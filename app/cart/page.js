"use client";
import { useUserDetails } from "@/context/zustand";
import { db } from "@/firebase";
import { useState } from "react";
import { ref, get } from "firebase/database";
import EventCard from "@/components/EventCard";

function Page() {
  const [cart, setCart] = useState([]);
  const { user } = useUserDetails();
  const userId = user?.uid;
  const userCartRef = ref(db, "users/" + userId + "/cart");
  get(userCartRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        setCart(snapshot.val());
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });

  return (
    <div className=" max-w-7xl flex items-center flex-wrap gap-5 pt-[100px] mx-auto">
      {cart.map((item, index) => (
        <EventCard event={item} key={index} />
        // You can add additional <p> elements for other properties
      ))}
    </div>
  );
}

export default Page;
