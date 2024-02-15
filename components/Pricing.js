"use client";
import React, { useEffect, useRef } from "react";

const Pricing = () => {
	return (
		<div className="h-screen max-w-xl text-white mx-auto ">
			<form>
				<div className="flex flex-col gap-8">
					<div className="flex items-center gap-10 py-6 px-12 border-2 border-white rounded-lg w-full">
						<input
							type="radio"
							id="platinum"
							value={4}
							name="membership"
							className="h-5 w-5"
						/>
						<label htmlFor="platinum" className="">
							<h3 className="text-2xl font-medium">PLATINUM PASS</h3>
							<p className="text-sm text-gray-300">
								Get 4 events for 300 rupees and a free workshop
							</p>
						</label>
					</div>
					<div className="flex items-center gap-10 py-6 px-12 border-2 border-white rounded-lg w-full">
						<input
							type="radio"
							id="gold"
							value={4}
							className="h-5 w-5"
							name="membership"
						/>
						<label htmlFor="gold" className="">
							<h3 className="text-2xl font-medium">GOLD PASS</h3>
							<p className="text-sm text-gray-300">
								Get 4 events for 300 rupees and a free workshop
							</p>
						</label>
					</div>
					<div className="flex items-center gap-10 py-6 px-12 border-2 border-white rounded-lg w-full">
						<input
							type="radio"
							id="silver"
							value={4}
							className="h-5 w-5"
							name="membership"
						/>
						<label htmlFor="silver" className="">
							<h3 className="text-2xl font-medium">SILVER PASS</h3>
							<p className="text-sm text-gray-300">
								Get 2 events for 100 rupees and a free workshop
							</p>
						</label>
					</div>
					<div className="flex items-center gap-10 py-6 px-12 border-2 border-white rounded-lg w-full">
						<input
							type="radio"
							id="normal"
							value={0}
							className="h-5 w-5"
							name="membership"
						/>
						<label htmlFor="normal" className="">
							<h3 className="text-2xl font-medium">NORMAL PASS</h3>
							<p className="text-sm text-gray-300">
								Get all events for regular price
							</p>
						</label>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Pricing;
