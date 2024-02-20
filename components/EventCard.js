"use client";
import { useUserDetails } from "@/context/zustand";
import { db } from "@/firebase";
import { get, ref, set, update } from "firebase/database";
import toast from "react-hot-toast";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

const EventCard = ({ event }) => {
	const { user } = useUserDetails();
	const addToCart = () => {
		const userId = user?.uid;
		const userCartRef = ref(db, "users/" + userId + "/cart");

		// Use the get function to retrieve the data
		get(userCartRef)
			.then((snapshot) => {
				if (snapshot.exists()) {
					// User already has a cart, update the existing cart
					const currentCart = snapshot.val();

					const newCartItem = {
						id: event._id,
						eventImage: event.eventImage,
						eventTitle: event.eventTitle,
						registrationFee: event.registrationFee,
						club: event.club,
						clubImage: event.clubImage,
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
								id: event._id,
								eventImage: event.eventImage,
								eventTitle: event.eventTitle,
								registrationFee: event.registrationFee,
								club: event.club,
								clubImage: event.clubImage,
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
		<div className="nft z-30 flex items-center cursor-pointer	">
			<div className="main w-full flex items-center gap-3">
				<Link className="" href={`/events/${event._id}`}>
					<Image
						className="tokenImage"
						src={urlForImage(event.eventImage)}
						alt="image"
						width={200}
						height={200}
					/>
				</Link>
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
					onClick={addToCart}
				>
					<button
						disabled={user ? false : true}
						className="price text-[#ee83e5] hover:text-black duration-200 ease-in-out w-full text-center rounded-md hover:bg-[#ee83e5] "
					>
						Add to Cart
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

export default EventCard;
