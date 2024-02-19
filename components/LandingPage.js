"use client";
import Spline from "@splinetool/react-spline";
import Image from "next/image";
import React from "react";
import SocialMedia from "./SocialMedia";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="relative h-screen w-screen ">
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[350px] md:w-auto">
        {/* <Spline
          scene="https://prod.spline.design/gTGVvXhoIrBSb1bg/scene.splinecode"
          className="hidden md:block"
        /> */}
        <Image
          src={
            "https://firebasestorage.googleapis.com/v0/b/tantrotsav-3d852.appspot.com/o/logo3.png?alt=media&token=79ce1a80-3996-4791-977a-53f4ac1eb1ed"
          }
          width={700}
          height={700}
          className=" w-[700px]"
        />
        <div className="absolute w-[300px] md:w-[700px] text-center left-[50%] -translate-x-[50%]">
          <h3 className="text-gray-300 font-semibold  mt-5 md:text-2xl md:mt-8 ">
            Unlocking Galaxies of Innovation: Tantrotsav - Amrita Chennai's
            Largest Techfest
          </h3>
          <div className="flex flex-col md:flex-row gap-2 md:gap-5 justify-center items-center md:text-lg font-medium mt-2 md:mt-5">
            <button className="price text-[#ee83e5] hover:text-black duration-300 ease-in-out px-5 py-2 md:px-5 md:py-2 border-2 border-[#ee83e5] text-center rounded-md hover:bg-[#ee83e5] ">
              <Link href="#aboutR">About Us</Link>
            </button>
            <button className="text-black bg-white px-2 py-2 md:px-5 md:py-2 border-2 border-white duration-300 ease-in-out text-center rounded-md hover:bg-transparent hover:text-white">
              <Link href="/events">Register Now</Link>
            </button>
          </div>
        </div>
      </div>
      <Image
        src={
          "https://firebasestorage.googleapis.com/v0/b/tantrotsav-3d852.appspot.com/o/astronaut.png?alt=media&token=2eba3164-cbe4-4ec2-b44d-7157e93c3837"
        }
        width={150}
        height={150}
        className="absolute lg:bottom-9 lg:left-[80px] md:w-[250px] floating bottom-[90px]"
      />
      <Image
        src={
          "https://firebasestorage.googleapis.com/v0/b/tantrotsav-3d852.appspot.com/o/ufo.png?alt=media&token=34219e0c-b012-4d0a-a252-05b08139eec9"
        }
        width={1537}
        height={2417}
        className="floatingaus absolute top-[200px] right-6 w-[160px] md:w-[250px] lg:top-[130px] lg:right-[380px] "
      />
      <SocialMedia />
    </div>
  );
};

export default LandingPage;
