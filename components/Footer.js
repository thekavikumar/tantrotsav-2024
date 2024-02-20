import React from "react";
import logo from "./logo2.png";
import {
	FaFacebook,
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="w-full p-8 ">
			<div className="grid lg:grid-cols-4 ">
				<div className="lg:col-span-1 flex flex-col sm:row-span-1">
					<Image src={logo} width={250} height={10} alt="Logo" />
				</div>
				<div className="lg:col-span-1 sm:row-span-1">
					<div>
						<div className="pb-2">Navigation</div>
						<div className="border-b-2 border-black w-fit hover:border-white transition-all duration-200">
							<Link href={"/"}>Home</Link>
						</div>
						<div className="border-b-2 border-black w-fit hover:border-white transition-all duration-200">
							<Link href={"/events"}>Events</Link>
						</div>
						<div className="border-b-2 border-black w-fit hover:border-white transition-all duration-200">
							<Link href={"/profile"}>Profile</Link>
						</div>
						<div className="border-b-2 border-black w-fit hover:border-white transition-all duration-200">
							<Link href={"/cart"}>Cart</Link>
						</div>
					</div>
				</div>
				<div className="lg:col-span-1 sm:row-span-1">
					<div className="pb-2">Contact</div>
					<div>Email : tantrotsav@ch.amrita.edu</div>
					<div>Number : +91 9025313327</div>
				</div>
				<div className="lg:col-span-1 sm:row-span-1">
					<div>Social Media</div>
					<div className="flex flex-row gap-3 pt-3">
						<FaFacebook className="h-6 w-6 hover:scale-110 transition-all duration-100 cursor-pointer" />
						<FaTwitter className="h-6 w-6 hover:scale-110 transition-all duration-100 cursor-pointer" />
						<FaInstagram className="h-6 w-6 hover:scale-110 transition-all duration-100 cursor-pointer" />
						<FaLinkedin className="h-6 w-6 hover:scale-110 transition-all duration-100 cursor-pointer" />
						<FaYoutube className="h-6 w-6 hover:scale-110 transition-all duration-100 cursor-pointer" />
						<FaGithub className="h-6 w-6 hover:scale-110 transition-all duration-100 cursor-pointer" />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
