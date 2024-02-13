"use client";
import { useCartDetails, useUserDetails } from "@/context/zustand";
import { db } from "@/firebase";
import axios from "axios";
import { useEffect, useState } from "react";
import { ref, onValue, set } from "firebase/database";
import CheckoutCard from "@/components/CheckoutCard";
import { IoBagCheckOutline } from "react-icons/io5";
import ShortUniqueId from "short-unique-id";
import toast from "react-hot-toast";

function Page() {
  const { cart, setCart, removeAll } = useCartDetails();
  const idGen = new ShortUniqueId({ length: 10 });
  const orderId = idGen.rnd();
  const [totalAmount, setTotalAmount] = useState(0);
  const { user } = useUserDetails();
  const userId = user?.uid;
  const userCartRef = ref(db, "users/" + userId + "/cart/");
  useEffect(() => {
    // Fetch user cart data when the userCartRef changes
    const unsubscribe = onValue(userCartRef, (snapshot) => {
      if (snapshot.exists()) {
        const newCart = snapshot.val();

        // Check if the cart data has changed before updating the state
        if (JSON.stringify(newCart) !== JSON.stringify(cart)) {
          setCart(newCart);
        }
      } else {
        console.log("No data available");
      }
    });

    return () => {
      // Unsubscribe when the component unmounts
      unsubscribe();
    };
  }, [userCartRef, setCart, cart]);

  const addToProfile = (data) => {
    const userId = user?.uid;
    const userProfileRef = ref(db, "users/" + userId);
    const setProfileRef = ref(db, "users/" + userId + "/orders/");

    // Use the get function to retrieve the data
    get(userCartRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          // User already has a cart, update the existing cart
          const currentOrders = snapshot.val();

          const newOrderItem = {
            orderId: data?.orderId,
            trackingId: data?.trackingId,
            orderStatus: data?.orderStatus,
            items: cart,
          };

          update(userProfileRef, {
            // Assuming 'items' is an array within the cart
            orders: [...currentOrders.orders, newOrderItem],
          });
          set(userCartRef, []);
          setCart([]);
        } else {
          // No existing cart, create a new cart
          const newOrderItem = {
            orderId: data?.orderId,
            trackingId: data?.trackingId,
            orderStatus: data?.orderStatus,
            amount: data?.amount,
          };

          set(setProfileRef, newOrderItem);
          set(userCartRef, []);
          setCart([]);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("started");

      const response = await axios.post(
        "https://ccavenues.vercel.app/ccavRequestHandler",
        `merchant_id=2156706&order_id=${orderId}&currency=INR&amount=${totalAmount}&redirect_url=https%3A%2F%2Fccavenues.vercel.app%2FccavResponseHandler&cancel_url=https%3A%2F%2Fccavenues.vercel.app%2FccavResponseHandler&language=EN`
      );
      console.log("response from nodejs: ", response.data);
      const newW = window.open("", "_blank");
      newW.document.write(response.data);
      const orderRef = ref(db, "orders/" + orderId);
      toast.success("started");
      onValue(orderRef, (snapshot) => {
        if (snapshot.exists()) {
          // The record exists at the specified path
          const data = snapshot.val();
          // Do something with the data
          console.log("Record exists:", data);
          if (data?.orderStatus == "Success") {
            toast.success(`orderStatus: ${data?.orderStatus}`);
            addToProfile(data);
          } else if (
            data?.orderStatus == "Aborted" ||
            data?.orderStatus == "Failure"
          ) {
            toast.error("Order Failed!");
          }
        } else {
          // The record does not exist at the specified path
          console.log("Record does not exist");
          toast.error("record not found");
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Calculate totalFee whenever cart changes
    const newTotalFee = cart.reduce(
      (total, item) => total + parseInt(item.registrationFee, 10),
      0
    );

    // Update totalAmount only if it has changed
    if (newTotalFee !== totalAmount) {
      setTotalAmount(newTotalFee);
    }
  }, [cart, totalAmount]);

  function handleRemoveAll() {
    const userCartRef = ref(db, "users/" + userId + "/cart/");
    set(userCartRef, []).then(() => [setCart([])]);
  }

  return (
    <div className=" max-w-7xl pt-[100px] mx-auto">
      <div className="flex items-center m-3 mb-6 w-full justify-between">
        <h1 className="text-2xl font-semibold">
          Welcome to cart, {user?.displayName}
        </h1>
        <div className="flex items-center gap-4">
          <h1 className="text-lg">Total Amount: ₹ {totalAmount}</h1>
          <form onSubmit={handleSubmit}>
            <button
              type="submit"
              className="border-2 flex items-center gap-3 border-white rounded-md px-5 py-2 hover:bg-white hover:text-black duration-200 ease-in-out"
            >
              <IoBagCheckOutline />
              Checkout
            </button>
          </form>
          <button
            onClick={handleRemoveAll}
            className="border-2 flex items-center gap-3 border-white rounded-md px-5 py-2 hover:bg-white hover:text-black duration-200 ease-in-out"
          >
            Remove All
          </button>
        </div>
      </div>
      {cart.length === 0 && (
        <div className="flex items-center justify-center h-[70vh]">
          <h1 className="text-3xl font-semibold">No items in the cart</h1>
        </div>
      )}
      {cart.length > 0 && (
        <div className=" flex items-center flex-wrap gap-12 ">
          {cart?.map((item, index) => (
            <CheckoutCard event={item} key={index} />
            // You can add additional <p> elements for other properties
          ))}
        </div>
      )}
    </div>
  );
}

export default Page;
