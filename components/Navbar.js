"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="absolute w-screen top-0 bg-transparent text-white flex items-center justify-between px-[100px] py-8">
      <h1 className="text-3xl">TANTROTSAV</h1>
      <div className="flex items-center gap-6 font-medium ">
        <Link
          href="/"
          className={
            pathname === "/"
              ? "bg-white px-3 py-1 rounded-sm text-black"
              : "px-3 py-2 rounded-sm hover:bg-white hover:text-black transition-all duration-300"
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
          href="/Gallery"
          className={
            pathname === "/gallery"
              ? "bg-white px-3 py-1 rounded-sm text-black"
              : "px-3 py-1 rounded-sm hover:bg-white hover:text-black transition-all duration-300"
          }
        >
          GALLERY
        </Link>
        <Link
          href="/About"
          className={
            pathname === "/about"
              ? "bg-white px-3 py-1 rounded-sm text-black"
              : "px-3 py-1 rounded-sm hover:bg-white hover:text-black transition-all duration-300"
          }
        >
          ABOUT
        </Link>
      </div>
      <div className="bg-white text-black text-lg px-4 py-1 rounded-md border-white border-2 hover:bg-transparent hover:text-white font-semibold transition-all duration-200 cursor-pointer">
        REGISTER
      </div>
    </div>
  );
}
