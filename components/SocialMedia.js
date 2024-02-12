import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const SocialMedia = () => {
	return (
		<div className="absolute flex lg:flex-col bottom-8 left-[50%] -translate-x-[50%] lg:bottom-[50%] lg:translate-y-[50%] lg:left-10 gap-12 text-white text-xl font-medium">
			<a
				href=""
				className="rounded-full p-3 duration-200 ease-in-out border-2 border-white hover:bg-white hover:text-black"
			>
				<FaInstagram />
			</a>
			<a
				href=""
				className="rounded-full p-3 duration-200 ease-in-out border-2 border-white hover:bg-white hover:text-black"
			>
				<FaFacebookF />
			</a>
			<a
				href=""
				className="rounded-full p-3 duration-200 ease-in-out border-2 border-white hover:bg-white hover:text-black"
			>
				<FaXTwitter />
			</a>
		</div>
	);
};

export default SocialMedia;
