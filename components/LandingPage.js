"use client";
import Spline from "@splinetool/react-spline";
import Image from "next/image";
import React from "react";
import ufo from "../components/ufo.png";
import logo3 from "../components/logo3.png";
import a1 from "../components/astronaut.png";
import SocialMedia from "./SocialMedia";
import Link from "next/link";

const LandingPage = () => {
	return (
		<div className="relative h-screen w-screen ">
			<div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[350px] md:w-auto">
				<Spline
					scene="https://prod.spline.design/gTGVvXhoIrBSb1bg/scene.splinecode"
					className="hidden md:block"
				/>
				<Image src={logo3} className="md:hidden w-[500px]" />
				<div className="absolute w-[300px] md:w-[700px] text-center left-[50%] -translate-x-[50%]">
					<h3 className="text-gray-300 font-semibold  mt-5 md:text-2xl md:mt-8 ">
						Unlocking Galaxies of Innovation: Tantrotsav - Amrita Chennai's
						Largest Techfest
					</h3>
					<div className="flex flex-col md:flex-row gap-2 md:gap-5 justify-center items-center md:text-lg font-medium mt-2 md:mt-5">
						<button className="text-black bg-white p-1 md:px-5 md:py-2 border-2 border-white text-center rounded-md ">
							<Link href="#aboutR">About Us</Link>
						</button>
						<button className="price text-[#ee83e5] hover:text-black duration-200 ease-in-out p-1 md:px-5 md:py-2 border-2 border-[#ee83e5] text-center rounded-md hover:bg-[#ee83e5] ">
							<Link href="/events">Register Now</Link>
						</button>
					</div>
				</div>
			</div>
			<Image
				src={a1}
				width={150}
				className="absolute lg:bottom-9 lg:left-[80px] md:w-[250px] floating bottom-[90px]"
			/>
			<Image
				src={ufo}
				className="floatingaus absolute top-[200px] right-6 w-[160px] md:w-[250px] lg:top-[130px] lg:right-[380px] "
			/>
			<SocialMedia />
		</div>
	);
};

export default LandingPage;
