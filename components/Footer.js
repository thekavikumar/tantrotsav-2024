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
            <div>Home</div>
            <div>About</div>
            <div>Events</div>
            <div>Cart</div>
          </div>
        </div>
        <div className="lg:col-span-1 sm:row-span-1">
          <div className="pb-2">Contact</div>
          <div>Tantrotsav Head</div>
          <div>+91 9025313327</div>
        </div>
        <div className="lg:col-span-1 sm:row-span-1">
          <div>Social Media</div>
          <div className="flex flex-row gap-3 pt-3">
            <FaFacebook className="h-6 w-6" />
            <FaTwitter className="h-6 w-6" />
            <FaInstagram className="h-6 w-6" />
            <FaLinkedin className="h-6 w-6" />
            <FaYoutube className="h-6 w-6" />
            <FaGithub className="h-6 w-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
