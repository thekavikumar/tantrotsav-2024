const EventCard = ({ event }) => {
	return (
		<div class="nft">
			<div class="main">
				<img className="tokenImage" src={event.eventImage.image} alt="image" />
				<h2 className="title">{event.eventTitle}</h2>
				<div className="tokenInfo">
					<div className="price">Add to Cart</div>
				</div>
				<hr />
				<div className="creator">
					<div className="wrapper">
						<img src={event.eventImage.image} />
					</div>
					<p>
						<ins>Creation of</ins> Clubname
					</p>
				</div>
			</div>
		</div>
	);
};

export default EventCard;
