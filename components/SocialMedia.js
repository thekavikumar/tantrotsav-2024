import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const SocialMedia = () => {
  return (
    <div className="absolute bottom-5 left-9 text-white text-xl font-medium flex flex-col gap-12">
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
