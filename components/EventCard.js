"use client";

import { db } from "@/firebase";
import { auth } from "@/firebase";
import { ref, set } from "firebase/database";

const EventCard = ({ event }) => {
	const userId = auth.currentUser?.uid;
	const addToCart = () => {
		set(ref(db, "users/" + userId), {
			cardProfile: event.eventImage.image,
			cardTitle: event.eventTitle,
			cardPrice: event.eventPrice,
			cardClub: event.club,
			clubImage: event.clubImage.image,
		});
	};

	return (
		<div class="nft">
			<div class="main">
				<img className="tokenImage" src={event.eventImage.image} alt="image" />
				<h2 className="title">{event.eventTitle}</h2>
				<div className="tokenInfo">
					<div className="price" onClick={addToCart}>
						Add to Cart
					</div>
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

export default EventCard;
