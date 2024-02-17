"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Login from "./Login";
import { auth } from "../firebase";
import { useUserDetails } from "@/context/zustand";
import { FaBars } from "react-icons/fa6";
import logo1 from "./logo2.png";
import Image from "next/image";

export default function Navbar() {
  const { user, setUser } = useUserDetails();
  const [openNav, setOpenNav] = React.useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Set the threshold value based on your design needs
      const threshold = 0;

      // Update state based on scroll position
      setIsScrolled(scrollY > threshold);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Em

  const navState = () => {
    setOpenNav(!openNav);
  };

  return (
    <div
      className={`absolute z-50 w-full top-0 text-white flex items-center justify-between px-[15px] lg:px-[100px] py-5 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-600 bg-opacity-10 backdrop-filter shadow-2xl backdrop-blur-md bg-blur"
          : "bg-transparent"
      }`}
    >
      <Image src={logo1} width={230} alt="logo" />
      <FaBars className="h-6 w-6 lg:hidden" onClick={navState} />

      <div
        className={`absolute lg:static flex flex-col lg:flex-row md:justify-center items-center gap-6 font-semibold  w-full bg-black md:bg-transparent ${
          openNav
            ? "top-[90px]"
            : "-top-[1000px] transition-all ease-in-out duration-300"
        } overflow-hidden`}
      >
        <Link
          href="/"
          className={
            pathname === "/"
              ? "bg-white px-3  rounded-md text-black"
              : "px-3  rounded-md hover:bg-white hover:text-black transition-all duration-300"
          }
        >
          HOME
        </Link>

        <Link
          href="#aboutR"
          className={
            pathname === "/about"
              ? "bg-white px-3  rounded-md text-black"
              : "px-3  rounded-md hover:bg-white hover:text-black transition-all duration-300"
          }
        >
          ABOUT
        </Link>
        <Link
          href="/events"
          className={
            pathname === "/events"
              ? "bg-white px-3  rounded-md text-black"
              : "px-3    rounded-md hover:bg-white hover:text-black transition-all duration-300"
          }
        >
          EVENTS
        </Link>

        <Link
          href={`${user ? "/profile" : ""}`}
          className={
            pathname === "/profile"
              ? "bg-white px-3  rounded-md text-black"
              : "px-3  rounded-md hover:bg-white hover:text-black transition-all duration-300"
          }
        >
          PROFILE
        </Link>

        <Link
          href={`${user ? "/cart" : ""}`}
          className={
            pathname === "/cart"
              ? "bg-white px-3  rounded-md text-black"
              : "px-3  rounded-md hover:bg-white hover:text-black transition-all duration-300"
          }
        >
          CART
        </Link>

        <Login />
      </div>
    </div>
  );
}
