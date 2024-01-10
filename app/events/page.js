import { getEvents } from "@/sanity/sanity.query";
import EventCard from "@/components/EventCard";

export default async function Page() {
	const events = await getEvents();
	// console.log(events);
	return (
		<main className="max-w-7xl mx-auto px-6">
			{events && (
				<div className="flex flex-wrap gap-6">
					{events.map((event) => (
						<EventCard event={event} />
					))}
				</div>
			)}
		</main>
	);
}
