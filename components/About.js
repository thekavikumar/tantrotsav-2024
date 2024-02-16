import React from "react";
import aboutimage from "../components/aboutimage.png";
import aboutimage1 from "../components/aboutimage1.png";
import Image from "next/image";

function About() {
	return (
		<div className="bg-black sm:mt-14" id="aboutR">
			<div className="max-w-8xl mx-auto sm:p-[60px] p-[30px]" id="about">
				<h1 className="text-white text-center font-bold sm:text-[50px] text-[40px] mb-10">
					ABOUT US
				</h1>
				<div className="lg:flex items-center justify-between md:gap-9">
					<Image
						id="tan-logo"
						className=" mx-auto md:w-[550px] rounded-lg "
						src={aboutimage}
						alt="tantrotsav"
					/>

					<div className="text-gray-300 md:text-lg mt-7 md:mt-16 lg:w-1/2">
						Tantrotsav, an illustrious technical festival proudly hosted by
						Amrita Vishwa Vidyapeetham Chennai campus, stands as a beacon of
						innovation and collaboration. With a commitment to fostering a
						dynamic platform for the exchange of pioneering ideas, Tantrotsav
						invites participants from diverse campuses to partake in an array of
						technical events. Our festival serves as a convergence point for
						aspiring minds, providing an opportunity to delve into the latest
						technological advancements across various fields. Through a series
						of meticulously curated technical events, Tantrotsav aims to
						cultivate a spirit of competitiveness, curiosity, and collaboration
						among participants.
						<br />
					</div>
				</div>
				<div className=" lg:flex items-center justify-between gap-9">
					<Image
						id="tan-logo"
						className=" block mx-auto mt-10  md:w-[550px] rounded-lg lg:hidden"
						src={aboutimage1}
						alt="tantrotsav"
					/>
					<div className=" text-gray-300 md:text-lg lg:w-1/2 my-7">
						At Tantrotsav, we believe in the power of inclusivity. Our festival
						welcomes individuals from different campuses, creating an enriching
						environment for knowledge-sharing and networking. From challenging
						competitions that ignite a passion for inquiry to hands-on technical
						workshops that empower participants, Tantrotsav is more than just an
						event; it is a celebration of the spirit of innovation. Join us at
						Tantrotsav, where boundaries dissolve, and the collective brilliance
						of diverse minds converges to shape the future of technology.
						Embrace the synergy of learning, collaboration, and excellence at
						Amrita Vishwa Vidyapeetham's Tantrotsav – where innovation knows no
						limits.
					</div>
					<Image
						id="tan-logo"
						className="mx-auto mt-10  md:w-[550px] rounded-lg hidden lg:block"
						src={aboutimage1}
						alt="tantrotsav"
					/>
				</div>
			</div>
		</div>
	);
}

export default About;
