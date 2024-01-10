"use client";
import { useCartDetails } from "@/context/zustand";

function page() {
	const { cart, removeSelected, removeAll } = useCartDetails();
	return (
		<div className="p-28">
			{cart.map((item) => {
				return (
					<div className="flex flex-row gap-4">
						<div>
							<img src={item.image} alt={item.name} className="w-20 h-20" />
						</div>
						<div>
							<h1>{item.name}</h1>
							<h2>{item.price}</h2>
							<button onClick={() => removeSelected(item._id)}>Remove</button>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default page;
