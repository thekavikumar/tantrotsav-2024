"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Login from "./Login";
import { useUserDetails } from "@/context/zustand";

export default function Navbar() {
  const pathname = usePathname();
  const { user } = useUserDetails();
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
  return (
    <div
      className={`fixed w-screen top-0 text-white flex items-center justify-between px-[100px] py-8 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-600 bg-opacity-10 backdrop-filter backdrop-blur-md bg-blur"
          : "bg-transparent"
      }`}
    >
      <h1 className="text-3xl">TANTROTSAV</h1>
      <div className="flex items-center gap-6 font-semibold">
        <Link
          href="/"
          className={
            pathname === "/"
              ? "bg-white px-3 py-1 rounded-sm text-black"
              : "px-3 py-1 rounded-sm hover:bg-white hover:text-black transition-all duration-300"
          }
        >
          HOME
        </Link>
        <Link
          href="/events"
          className={
            pathname === "/events"
              ? "bg-white px-3 py-1 rounded-sm text-black"
              : "px-3 py-1   rounded-sm hover:bg-white hover:text-black transition-all duration-300"
          }
        >
          EVENTS
        </Link>
        <Link
          href="/gallery"
          className={
            pathname === "/gallery"
              ? "bg-white px-3 py-1 rounded-sm text-black"
              : "px-3 py-1 rounded-sm hover:bg-white hover:text-black transition-all duration-300"
          }
        >
          GALLERY
        </Link>
        <Link
          href="/about"
          className={
            pathname === "/about"
              ? "bg-white px-3 py-1 rounded-sm text-black"
              : "px-3 py-1 rounded-sm hover:bg-white hover:text-black transition-all duration-300"
          }
        >
          ABOUT
        </Link>
        {user && (
          <Link
            href="/profile"
            className={
              pathname === "/profile"
                ? "bg-white px-3 py-1 rounded-sm text-black"
                : "px-3 py-1 rounded-sm hover:bg-white hover:text-black transition-all duration-300"
            }
          >
            PROFILE
          </Link>
        )}
      </div>
      <Login />
    </div>
  );
}
