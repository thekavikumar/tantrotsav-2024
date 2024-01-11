"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Login from "./Login";
import { auth } from "../firebase";
import { useUserDetails } from "@/context/zustand";

export default function Navbar() {
  const { user, setUser, signOutUser } = useUserDetails();
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

  return (
    <div
      className={`fixed z-50 w-screen top-0 text-white flex items-center justify-between px-[100px] py-5 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-600 bg-opacity-10 backdrop-filter shadow-2xl backdrop-blur-md bg-blur"
          : "bg-transparent"
      }`}
    >
      <h1 className="text-4xl font-semibold" id="logo">
        TANTROTSAV
      </h1>
      <div className="flex items-center gap-6 font-semibold">
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
          href="/gallery"
          className={
            pathname === "/gallery"
              ? "bg-white px-3  rounded-md text-black"
              : "px-3  rounded-md hover:bg-white hover:text-black transition-all duration-300"
          }
        >
          GALLERY
        </Link>
        <Link
          href="/about"
          className={
            pathname === "/about"
              ? "bg-white px-3  rounded-md text-black"
              : "px-3  rounded-md hover:bg-white hover:text-black transition-all duration-300"
          }
        >
          ABOUT
        </Link>
        {user && (
          <Link
            href="/profile"
            className={
              pathname === "/profile"
                ? "bg-white px-3  rounded-md text-black"
                : "px-3  rounded-md hover:bg-white hover:text-black transition-all duration-300"
            }
          >
            PROFILE
          </Link>
        )}
        {user && (
          <Link
            href="/cart"
            className={
              pathname === "/cart"
                ? "bg-white px-3  rounded-md text-black"
                : "px-3  rounded-md hover:bg-white hover:text-black transition-all duration-300"
            }
          >
            CART
          </Link>
        )}
      </div>
      <Login />
    </div>
  );
}
