"use client";
import { useUserDetails } from "@/context/zustand";
import { db } from "@/firebase";
import { set, ref, onValue } from "firebase/database";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { HiArrowDownTray } from "react-icons/hi2";
import ProfileOrderCard from "@/components/ProfileOrderCard";
import { toast } from "react-hot-toast";
import MyDocument from "@/components/PdfGen";
import { PDFDownloadLink } from "@react-pdf/renderer";

export default function Page() {
  const { user } = useUserDetails();
  const [userDetails, setUserDetails] = useState(null);
  const [orders, setOrders] = useState([]);

  function createUserDetails() {
    console.log(userDetails);
    set(ref(db, "users/" + user?.uid + "/Details"), {
      userDetails,
    });
    toast.success("Profile Updated");
  }

  useEffect(() => {
    if (user) {
      const userRef = ref(db, "users/" + user.uid + "/Details/userDetails");
      const fetchData = (snapshot) => {
        const data = snapshot.val();
        if (snapshot.exists() && !userDetails?.clg && !userDetails?.phone) {
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
  }, [user?.uid, userDetails]);

  // for orders
  useEffect(() => {
    if (user) {
      const userOrderRef = ref(db, "users/" + user.uid + "/orders/");

      const fetchOrders = (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setOrders(Object.values(data));
        }
      };

      const errorCallback = (error) => {
        console.error("Error fetching data:", error);
      };

      // Set up the Firebase subscription
      const unsubscribeOrders = onValue(
        userOrderRef,
        fetchOrders,
        errorCallback
      );

      // Clean up the subscription when the component unmounts
      return () => {
        unsubscribeOrders();
      };
    }
  }, [user?.uid]);
  console.log("orders: ", orders);
  return (
    <>
      {user ? (
        <div className="p-[130px]">
          <div>
            <div className="flex justify-around p-2 items-center">
              <div className="flex flex-col items-center justify-center gap-7">
                <Image
                  src={user?.photoURL}
                  width={200}
                  height={200}
                  alt="profile"
                  className="rounded-md border-2 border-white p-1 w-full"
                />
                <button className=" border-2 border-white rounded-md px-10 py-1 hover:bg-white hover:text-black duration-200 ease-in-out">
                  <PDFDownloadLink
                    document={
                      <MyDocument
                        orders={orders[0]}
                        userD={userDetails}
                        user={user}
                      />
                    }
                    fileName="Acknowledgement.pdf"
                    className="flex items-center gap-4 text-lg"
                  >
                    <HiArrowDownTray />
                    Download Receipt
                  </PDFDownloadLink>
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
                    value={userDetails?.clg}
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
                    value={userDetails?.phone}
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
              <div className="flex flex-wrap justify-center gap-6">
                {orders[0]?.map((cart, cartIndex) => {
                  return cart?.items?.map((item, index) => {
                    return <ProfileOrderCard order={item} key={index} />;
                  });
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="">
          <h1>Please Login to view your profile</h1>
        </div>
      )}
    </>
  );
}
