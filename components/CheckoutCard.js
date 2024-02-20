"use client";
import { useCartDetails, useUserDetails } from "@/context/zustand";
import { db } from "@/firebase";
import { urlForImage } from "@/sanity/lib/image";
import { get, ref, update } from "firebase/database";
import toast from "react-hot-toast";

const CheckoutCard = ({ event }) => {
  const { user } = useUserDetails();
  const { setCart } = useCartDetails();
  const userId = user?.uid;
  const userCartRef = ref(db, "users/" + userId + "/cart/cart/");
  const updateCartRef = ref(db, "users/" + userId + "/cart/");
  const itemId = event.id;

  async function handleDelete() {
    try {
      await get(userCartRef).then((snapshot) => {
        if (snapshot.exists()) {
          const cart = snapshot.val();
          const itemIndex = cart.findIndex((item) => item.id === itemId);

          if (itemIndex !== -1) {
            const updatedCart = cart.filter(
              (item, index) => index !== itemIndex
            );
            console.log(updatedCart);
            try {
              // Use the update function to update only the 'cart' property
              update(updateCartRef, { cart: updatedCart });
              setCart(updatedCart);
              toast.success("Item removed from Firebase!");
            } catch (error) {
              console.error("Error updating Firebase:", error);
              toast.error("Error updating Firebase: " + error.message);
            }
          } else {
            toast.error("Item not found in the cart");
          }
        } else {
          console.log("No data available");
        }
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="nft flex items-center cursor-pointer	">
      <div className="main w-full flex items-center gap-3">
        <img
          className="tokenImage"
          src={urlForImage(event.eventImage)}
          alt="image"
        />
        <div className="flex items-center w-full justify-between">
          <h2 className="title text-lg truncate w-[70%] font-semibold">
            {event.eventTitle}
          </h2>
          <h2 className="title text-lg w-fit font-semibold">
            ₹ {event.registrationFee}
          </h2>
        </div>
        <div
          className="tokenInfo w-full cursor-pointer hover:text-black"
          onClick={handleDelete}
        >
          <button className="price text-[#ee83e5] hover:text-black duration-200 ease-in-out w-full text-center rounded-md hover:bg-[#ee83e5] ">
            Remove from Cart
          </button>
        </div>
        <hr />
        <div className="creator">
          <div className="wrapper">
            <img src={urlForImage(event.clubImage)} />
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
