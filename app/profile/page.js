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
    if (userDetails?.busRoute !== "Other Route" && userDetails?.otherRoute) {
      // Set otherRoute to null
      setUserDetails((prevDetails) => ({
        ...prevDetails,
        otherRoute: null,
      }));
    }
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
        <div className="pt-[130px] z-30 relative">
          <div>
            <div className="flex  justify-around p-2 items-center flex-col sm:flex-row">
              <div className="flex flex-col items-center justify-center gap-7 py-4">
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
                <div className="flex gap-4 text-lg w-full">
                  <p className="w-full">Name:</p>
                  <input
                    type="text"
                    value={userDetails?.name}
                    className="outline-none items-end rounded-md bg-transparent border border-white hover:ring-2 hover:ring-white focus:ring-2 focus:ring-white px-2 py-1 text-sm"
                    onChange={(e) =>
                      setUserDetails({ ...userDetails, name: e.target.value })
                    }
                  />
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
                {/* j */}
                <div className="flex gap-4 text-lg w-full">
                  <p className="w-full">Phone Number:</p>
                  <input
                    type="text"
                    value={userDetails?.phone}
                    className="outline-none rounded-md bg-transparent border border-white hover:ring-2 hover:ring-white focus:ring-2 focus:ring-white px-2 py-1 text-sm"
                    onChange={(e) =>
                      setUserDetails({ ...userDetails, phone: e.target.value })
                    }
                  />
                </div>
                <div className="flex gap-4 text-lg w-full">
                  <p className="w-full">Bus Route:</p>
                  <select
                    value={userDetails?.busRoute}
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        busRoute: e.target.value,
                      })
                    }
                    className="outline-none rounded-md bg-transparent border border-white hover:ring-2 hover:ring-white text-white focus:ring-2 focus:ring-white px-2 py-1 text-sm"
                  >
                    <option className="text-black" value="select">
                      Select
                    </option>
                    <option className="text-black" value="No Need">
                      No Need
                    </option>
                    <option className="text-black" value="Route 1">
                      Route 1
                    </option>
                    <option className="text-black" value="Route 2">
                      Route 2
                    </option>
                    <option className="text-black" value="Other Route">
                      Other Route
                    </option>
                  </select>
                </div>
                {userDetails?.busRoute === "Other Route" && (
                  <div className="flex gap-4 text-lg w-full">
                    <p className="w-full">Other Route:</p>
                    <input
                      type="text"
                      value={userDetails?.otherRoute}
                      className="outline-none rounded-md bg-transparent border border-white hover:ring-2 hover:ring-white focus:ring-2 focus:ring-white px-2 py-1 text-sm"
                      onChange={(e) =>
                        setUserDetails({
                          ...userDetails,
                          otherRoute: e.target.value,
                        })
                      }
                    />
                  </div>
                )}
                <div className="flex gap-4 text-lg w-full">
                  <p className="w-full">Are you Amrita Chennai Student:</p>
                  <select
                    value={userDetails?.amrita}
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        amrita: e.target.value,
                      })
                    }
                    className="outline-none rounded-md bg-transparent border border-white hover:ring-2 hover:ring-white text-white focus:ring-2 focus:ring-white px-2 py-1 text-sm"
                  >
                    <option className="text-black" value="select">
                      Select
                    </option>
                    <option className="text-black" value="Yes">
                      Yes
                    </option>
                    <option className="text-black" value="No">
                      No
                    </option>
                  </select>
                </div>
                {userDetails?.amrita === "Yes" && (
                  <div className="flex gap-4 text-lg w-full">
                    <p className="w-full">Your Roll Number(CH.EN.U4XXXXX):</p>
                    <input
                      type="text"
                      value={userDetails?.rollNumber}
                      className="outline-none rounded-md bg-transparent border border-white hover:ring-2 hover:ring-white focus:ring-2 focus:ring-white px-2 py-1 text-sm"
                      onChange={(e) =>
                        setUserDetails({
                          ...userDetails,
                          rollNumber: e.target.value,
                        })
                      }
                    />
                  </div>
                )}
                <div className="flex gap-4 text-lg w-full">
                  <p className="w-full">Accommodation:</p>
                  <select
                    value={userDetails?.accommodation}
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        accommodation: e.target.value,
                      })
                    }
                    className="outline-none rounded-md bg-transparent border border-white hover:ring-2 hover:ring-white text-white focus:ring-2 focus:ring-white px-2 py-1 text-sm"
                  >
                    <option className="text-black" value="select">
                      Select
                    </option>
                    <option className="text-black" value="Not Required">
                      Not Required
                    </option>
                    <option className="text-black" value="Required">
                      Required
                    </option>
                  </select>
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
              <div className="flex flex-wrap justify-center gap-6 pb-4">
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
        <div className="h-screen flex items-center justify-center font-semibold text-2xl">
          <h1>Please Login to view your profile</h1>
        </div>
      )}
    </>
  );
}
