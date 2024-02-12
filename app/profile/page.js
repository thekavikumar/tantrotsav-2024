"use client";

import { useCartDetails, useUserDetails } from "@/context/zustand";
import { db } from "@/firebase";
import { set, ref, onValue } from "firebase/database";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { HiArrowDownTray } from "react-icons/hi2";
import { toast } from "react-hot-toast";
import EventCard from "@/components/EventCard";

export default function Page() {
  const { user } = useUserDetails();
  console.log(user);
  const [userDetails, setUserDetails] = useState({ clg: "", phone: "" });
  function createUserDetails() {
    console.log(userDetails);
    set(ref(db, "users/" + user?.uid), {
      userDetails,
    });
    toast.success("Profile Updated");
  }

  useEffect(() => {
    if (user?.uid) {
      const userRef = ref(db, "users/" + user.uid + "/userDetails");

      const fetchData = (snapshot) => {
        const data = snapshot.val();
        if (snapshot.exists()) {
          setUserDetails(data);
        }
      };

      const errorCallback = (error) => {
        console.error("Error fetching data:", error);
      };

      // Set up the Firebase subscription
      const unsubscribe = onValue(userRef, fetchData, errorCallback);

      // Clean up the subscription when the component unmounts
      return () => {
        unsubscribe();
      };
    }
  }, [user?.uid]);
  return (
    <div className="p-[130px]">
      {user && (
        <div>
          <div className="flex justify-around items-center">
            <div className="flex flex-col items-center justify-center gap-7">
              <Image
                src={user?.photoURL}
                width={200}
                height={200}
                alt="profile"
                className="rounded-md border-2 border-white p-1 w-full"
              />
              <button
                type="submit"
                className="flex items-center gap-4 text-lg border-2 border-white rounded-md px-10 py-1 hover:bg-white hover:text-black duration-200 ease-in-out"
              >
                <HiArrowDownTray />
                Download Recipt
              </button>
            </div>
            <div className="flex flex-col items-start justify-center gap-5 max-w-4xl">
              <div className="flex gap-4 text-xl">
                <p className="">Name:</p>
                <p>{user?.displayName}</p>
              </div>
              <div className="flex gap-4 text-lg w-full">
                <p className="w-full">College Name:</p>
                <input
                  type="text"
                  value={userDetails.clg}
                  className="outline-none items-end rounded-md bg-transparent border border-white hover:ring-2 hover:ring-white focus:ring-2 focus:ring-white px-2 py-1 text-sm"
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, clg: e.target.value })
                  }
                />
              </div>
              <div className="flex gap-4 text-lg w-full">
                <p className="w-full">Phone Number:</p>
                <input
                  type="number"
                  value={userDetails.phone}
                  className="outline-none rounded-md bg-transparent border border-white hover:ring-2 hover:ring-white focus:ring-2 focus:ring-white px-2 py-1 text-sm"
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, phone: e.target.value })
                  }
                />
              </div>
              <button
                className="w-full text-lg mt-3 border-2  border-white rounded-md px-3 py-1 hover:bg-white hover:text-black duration-200 ease-in-out text-center"
                onClick={createUserDetails}
              >
                Save
              </button>
            </div>
          </div>
          <div className="flex items-center justify-start my-8"></div>
          <div>
            <h1 className="text-3xl text-center font-bold my-14">ORDERS</h1>
            <div className="flex flex-wrap gap-6"></div>
          </div>
        </div>
      )}
    </div>
  );
}
